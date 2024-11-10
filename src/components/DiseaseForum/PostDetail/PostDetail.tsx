import React, { useMemo } from 'react';
import { Post } from '../../../types/DiseaseforumTypes/postTypes';
import dogIcon from '../../../assets/Icons/Dog-Icon.png';
import catIcon from '../../../assets/Icons/Cat-Icon.png';
import './PostDetail.css';
import { symptomMedicationMap } from '../../../services/DiseaseforumServices/symptomMedicationMap';
import { diseaseSymptomMap } from '../../../services/DiseaseforumServices/diseaseSymptomMap';

const getMedicationRecommendations = (selectedSymptoms: string[]): string[] => {
  const recommendedMedications: Set<string> = new Set();

  selectedSymptoms.forEach(symptom => {
    const medications = symptomMedicationMap[symptom];
    if (medications) {
      medications.forEach(med => recommendedMedications.add(med));
    }
  });

  return Array.from(recommendedMedications);
};

const getRelatedDiseases = (symptoms: string[]): string[] => {
  const relatedDiseases: Set<string> = new Set();

  for (const [disease, diseaseSymptoms] of Object.entries(diseaseSymptomMap)) {
    if (symptoms.some(symptom => diseaseSymptoms.includes(symptom))) {
      relatedDiseases.add(disease);
    }
  }
  return Array.from(relatedDiseases);
};

interface PostDetailProps {
  post: Post;
  onClose: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose }) => {
  const medicationRecommendations = useMemo(() => {
    return getMedicationRecommendations(post.symptoms);
  }, [post.symptoms]);

  const relatedDiseases = useMemo(() => {
    return getRelatedDiseases(post.symptoms);
  }, [post.symptoms]);

  const cleanRecommendationText = (text: string): string => {
    return text.replace(/\*/g, '').replace(/-/g, '').trim();
  };

  const recommendationSections = post.iaRecommendation
    ? cleanRecommendationText(post.iaRecommendation).split('\n\n')
    : [];

  return (
    <div className="detail-modal">
      <div className="detail-modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>

        <div className="detail-header">
          <h2 className="detail-post-title">{post.title}</h2>
          <span className={`priority ${post.priority.toLowerCase()}`}>
            {post.priority}
          </span>
        </div>

        <div className="post-body">
          <div className="post-image-detail">
            {post.photo ? (
              <img src={URL.createObjectURL(post.photo)} alt={post.petName} />
            ) : (
              <div className="image-placeholder">No Image Available</div>
            )}
          </div>

          <div className="post-info">
            <hr className="divisor" />
            <div className="pet-info-detail">
              <h3 className="pet-name-detail">
                <img
                  src={post.animalType === 'dog' ? dogIcon : catIcon}
                  className="pet-icon"
                  alt={post.animalType === 'dog' ? 'Dog Icon' : 'Cat Icon'}
                />
                {post.petName}
              </h3>
            </div>

            <div className="disease-info-detail">
              <div className="description">
                <h4 className="description-title-detail">Description</h4>
                <p className="description-detail">{post.description}</p>
              </div>

              <div className="symptoms">
                <h4 className="symptoms-title-detail">Symptoms</h4>
                <div className="symptom-tags-detail">
                  {post.symptoms.map((symptom, index) => (
                    <span key={index} className="symptom-tag-detail">
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="related-diseases">
                <h4 className="related-diseases-title">Related Diseases</h4>
                <div className="related-disease-tags">
                  {relatedDiseases.map((disease, index) => (
                    <span key={index} className="disease-tag">{disease}</span>
                  ))}
                </div>
              </div>
            </div>

            <hr className="divisor" />

            <div className="ia-recommendation">
              <h4 className="recommendation-title-detail">Recommended Treatment</h4>
              {recommendationSections.length > 0 ? (
                recommendationSections.map((section, index) => (
                  <div key={index} className="recommendation-section">
                    <p>{section}</p>
                  </div>
                ))
              ) : (
                <p className="recommendation-detail">No recommendation available</p>
              )}
            </div>

            <div className="medication-recommendation">
              <h4 className="medication-title-detail">Medication Suggestions</h4>
              {medicationRecommendations.length > 0 ? (
                <ul>
                  {medicationRecommendations.map((medication, index) => (
                    <li key={index}>{medication}</li>
                  ))}
                </ul>
              ) : (
                <p>No medications recommended based on selected symptoms of your pet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
