import React, { useState } from 'react';
import SymptomSelector from '../SymptomSelector/SymptomSelector';
import { PostData } from '../../../types/postTypes';
import { AnimalType } from '../../../types/diseaseTypes';
import './PostForm.css';
import { useCohere } from '../../../hooks/useCohere';

interface PostFormProps {
  onSubmit: (newPost: PostData) => void;
  onClose: () => void;
}

const determinePriority = (symptoms: string[]): "low" | "medium" | "high" | "emergency" => {
  const emergencySymptoms = ["Difficulty Breathing", "Blue Gums or Tongue", "Severe Pain"];
  const highPrioritySymptoms = ["Fever", "Lethargy", "Vomiting"];
  const mediumPrioritySymptoms = ["Coughing", "Sneezing", "Itching"];

  if (symptoms.some(symptom => emergencySymptoms.includes(symptom))) {
    return "emergency";
  } else if (symptoms.some(symptom => highPrioritySymptoms.includes(symptom))) {
    return "high";
  } else if (symptoms.some(symptom => mediumPrioritySymptoms.includes(symptom))) {
    return "medium";
  } else {
    return "low";
  }
};

const PostForm: React.FC<PostFormProps> = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [animalType, setAnimalType] = useState<AnimalType | null>(null);
  const [petName, setPetName] = useState('');
  const [photo, setPhoto] = useState<File | undefined>(undefined);
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(undefined);

  const { getRecommendation, response, loading, error } = useCohere();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!animalType) {
      alert('Please select your pet type.');
      return;
    }
  
    const recommendation = await getRecommendation(symptoms.join(', '));
    console.log('Recommendation:', recommendation);
  
    const priority = determinePriority(symptoms);
  
    onSubmit({
      title,
      description,
      symptoms,
      animalType,
      petName,
      priority,
      photo,
      iaRecommendation: recommendation,
    });
  
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);

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
          <input
            className="Post-title-form"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className="form-layout">
            <div className="upload-section">
              <label
                className={`upload-box ${photoPreview ? 'image-uploaded' : ''}`}
                style={{ backgroundImage: `url(${photoPreview})` }}
              >
                <input type="file" onChange={handleFileChange} />
              </label>
            </div>

            <div className="form-section">
              <div className="pet-description">
                <input
                  className="pet-name"
                  type="text"
                  placeholder="Pet Name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  required
                />
                <select
                  className="animal-type"
                  value={animalType || ''}
                  onChange={(e) => setAnimalType(e.target.value as AnimalType)}
                >
                  <option value="">Type of animal</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div className="symptom-tags-form">
                <SymptomSelector symptoms={symptoms} setSymptoms={setSymptoms} />
              </div>

              <textarea
                placeholder="Additional description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Uploading post...' : 'Submit Post'}
              </button>

              {error && <p>Error fetching recommendation: {error}</p>}
              {response && (
                <div>
                  <h3>Recommended Treatment:</h3>
                  <p>{response}</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
