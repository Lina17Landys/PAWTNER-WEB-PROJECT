import React, { useState } from 'react';
import BarDash from "../../components/BarDashboard/nav-dash";
import MapComponent from "../../components/MapComponent/MapComponent";
import './ReportSystem.css'; 

interface PinData {
  coordinates: [number, number];
  petName: string;
  species: string;
  lastSeen: string;
  address: string;
  notes: string;
  image?: string;
}

function ReportSystem() {
  const [selectedPin, setSelectedPin] = useState<PinData | null>(null);
  const [pins, setPins] = useState<PinData[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedPin) {
      const pinIndex = pins.findIndex(
        (pin) =>
          pin.coordinates[0] === selectedPin.coordinates[0] &&
          pin.coordinates[1] === selectedPin.coordinates[1]
      );

      if (pinIndex !== -1) {
        const updatedPins = [...pins];
        updatedPins[pinIndex] = selectedPin;
        setPins(updatedPins);
      } else {
        setPins([...pins, selectedPin]);
      }

      setSelectedPin(null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedPin && event.target.files?.[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPin({ ...selectedPin, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="NavBar"><BarDash /></div>
      <div className="report-system-wrapper">
        <h1 className="title-Map">Help a friend</h1>
        <div className="report-container">
          <div className="form-container">
            <h3 className='subtitle-map'>Stray Animal</h3>
            <form className="report-form" onSubmit={handleSubmit}>
              <input 
                type="file" 
                className="form-input" 
                placeholder="Upload photo" 
                onChange={handleImageUpload} 
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Pet's name" 
                value={selectedPin?.petName || ''}
                onChange={(e) => {
                  if (selectedPin) setSelectedPin({ ...selectedPin, petName: e.target.value });
                }}
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Species" 
                value={selectedPin?.species || ''}
                onChange={(e) => {
                  if (selectedPin) setSelectedPin({ ...selectedPin, species: e.target.value });
                }}
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Last seen" 
                value={selectedPin?.lastSeen || ''}
                onChange={(e) => {
                  if (selectedPin) setSelectedPin({ ...selectedPin, lastSeen: e.target.value });
                }}
              />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Address" 
                value={selectedPin?.address || ''}
                onChange={(e) => {
                  if (selectedPin) setSelectedPin({ ...selectedPin, address: e.target.value });
                }}
              />
              <textarea 
                className="form-textarea" 
                placeholder="Additional notes"
                value={selectedPin?.notes || ''}
                onChange={(e) => {
                  if (selectedPin) setSelectedPin({ ...selectedPin, notes: e.target.value });
                }}
              />
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
          <div className="map-wrapper">
            <MapComponent 
              selectedPin={selectedPin} 
              setSelectedPin={setSelectedPin} 
              pins={pins} 
              setPins={setPins} 
            />
          </div>
        </div>
        <div className="pin-details-container">
          {pins.map((pin, index) => (
            <div key={index} className="pin-card">
              {pin.image && <img src={pin.image} alt="Uploaded" className="pin-image" />}
              <div className="pin-info">
                <p><strong>Pet Name:</strong> {pin.petName || 'N/A'}</p>
                <p><strong>Species:</strong> {pin.species || 'N/A'}</p>
                <p><strong>Last Seen:</strong> {pin.lastSeen || 'N/A'}</p>
                <p><strong>Address:</strong> {pin.address || 'N/A'}</p>
                <p><strong>Notes:</strong> {pin.notes || 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReportSystem;