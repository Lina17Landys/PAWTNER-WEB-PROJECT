import BarDash from "../../components/BarDashboard/nav-dash";
import MapComponent from "../../components/MapComponent/MapComponent";
import './ReportSystem.css'; 
function ReportSystem() {
  return (
    <>
      <BarDash />
      <div className="report-system-wrapper">
        <h1 className="title">Help a friend</h1>
        <div className="report-container">
          <div className="form-container">
            <h3>Stray Animal</h3>
            <form className="report-form">
              <input type="file" className="form-input" placeholder="Upload photo" />
              <input type="text" className="form-input" placeholder="Pet's name" />
              <input type="text" className="form-input" placeholder="Specie" />
              <input type="text" className="form-input" placeholder="Last seen" />
              <input type="text" className="form-input" placeholder="Address" />
              <textarea className="form-textarea" placeholder="Additional notes"></textarea>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
          <div className="map-wrapper">
            <MapComponent />
          </div>
        </div>
      </div>
    </>
  );
}

<<<<<<< HEAD
export default ReportSystem;
=======
export default ReportSystem;
>>>>>>> develop
