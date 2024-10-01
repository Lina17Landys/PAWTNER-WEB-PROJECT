import React, { useState } from 'react';
import SymptomSelector from '../SymptomSelector/SymptomSelector';
import { PostData } from '../../../types/postTypes';
import { AnimalType } from '../../../types/diseaseTypes';
import './PostForm.css';

interface PostFormProps {
  onSubmit: (newPost: PostData) => void;
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [animalType, setAnimalType] = useState<AnimalType | null>(null);
  const [petName, setPetName] = useState('');
  const [priority, setPriority] = useState('low');
  const [photo, setPhoto] = useState<File | undefined>(undefined);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!animalType) {
      alert('Please select an animal type.');
      return;
    }

    onSubmit({ title, description, symptoms, animalType, petName, priority, photo });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);

      /*esto es para que se vea una preview de la imagen*/
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(undefined);
      setPhotoPreview(undefined);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>

        <form onSubmit={handleSubmit} className="post-form">
          <input className="Post-title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <div className="form-layout">
            
            <div className="upload-section">
            <label className={`upload-box ${photoPreview ? 'image-uploaded' : ''}`}
            style={{ backgroundImage: `url(${photoPreview})` }}>
              <input type="file" onChange={handleFileChange} />
            </label>
            </div>

            <div className="form-section">
              <div className="pet-description">
                <input className="pet-name" type="text" placeholder="Pet Name" value={petName} onChange={(e) => setPetName(e.target.value)} required />
                <select className="animal-type" value={animalType || ''} onChange={(e) => setAnimalType(e.target.value as AnimalType)}>
                  <option value="">Type of animal</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div className="symptom-tags">
                <SymptomSelector symptoms={symptoms} setSymptoms={setSymptoms} />
              </div>

              <textarea placeholder="Describe the symptoms" value={description} onChange={(e) => setDescription(e.target.value)} required />

              <select className="priority-level" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low Priority">Low Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="High Priority">High Priority</option>
                <option value="Emergency">Emergency</option>
              </select>

              <button type="submit">Submit Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
