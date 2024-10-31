import React from 'react';

interface SymptomSelectorProps {
  symptoms: string[];
  setSymptoms: (selectedSymptoms: string[]) => void;
}

const allSymptoms = [
  "Vomiting", "Diarrhea", "Loss of Appetite", "Abdominal Pain", "Constipation", "Excessive Drooling", /*Digestive Issues*/
  "Itching", "Hair Loss", "Redness", "Dry Skin", "Bumps", "Sores", "Foul Odor", "Flaky Skin", /*Skin and Coat Problems*/
  "Itchy Skin", "Sneezing", "Watery Eyes", "Swelling", "Ear Infections", "Coughing", "Chewing Paws", /*Allergies*/
  "Limping", "Stiffness", "Difficulty Standing", "Reluctance to Move", "Swelling in Joints", "Loss of Muscle Mass", /*Mobility Issues*/
  "Fever", "Swollen Lymph Nodes", "Pus Discharge", "Coughing", "Sneezing", "Lethargy", "Swelling or Abscesses", /*Infections*/
  "Coughing", "Wheezing", "Difficulty Breathing", "Nasal Discharge", "Sneezing", "Rapid Breathing", "Blue Gums or Tongue", /*Respiratory Issues*/
  "Aggression", "Fearfulness", "Excessive Barking", "Restlessness", "Hiding", "Excessive Licking or Grooming", /*Behavioral Changes*/
  "Lethargy", "Weight Loss", "Dehydration", "Vomiting", "Fever", "Behavior Changes", "Poor Coat Condition" /*General Wellness*/
];

const SymptomSelector: React.FC<SymptomSelectorProps> = ({ symptoms, setSymptoms }) => {
  
  const handleSymptomClick = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      
      setSymptoms([...symptoms, symptom]);
    }
  };

  return (
    <div className="symptom-selector">
      {allSymptoms.map((symptom, index) => (
        <div
          key={`${symptom}-${index}`}
          className={`symptom-tag ${symptoms.includes(symptom) ? 'selected' : ''}`}
          onClick={() => handleSymptomClick(symptom)}
        >
          {symptom}
        </div>
      ))}
    </div>
  );
};

export default SymptomSelector;
