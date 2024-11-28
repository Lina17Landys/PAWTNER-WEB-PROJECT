export const symptomMedicationMap: { [key: string]: string[] } = {
    // Digestive Issues
    "Vomiting": ["Ondansetron", "Domperidone", "Metoclopramide"],
    "Diarrhea": ["Loperamide", "Metronidazole"],
    "Loss of Appetite": ["Mirtazapine", "Cyproheptadine"],
    "Abdominal Pain": ["Butorphanol", "Gabapentin"],
    "Constipation": ["Lactulose", "Polyethylene Glycol"],
    "Excessive Drooling": ["Cerenia", "Antacids"],
  
    // Skin and Coat Problems
    "Itching": ["Apoquel", "Hydrocortisone Cream"],
    "Hair Loss": ["Omega-3 Supplements", "Antifungal Shampoos"],
    "Redness": ["Corticosteroids", "Antihistamines"],
    "Dry Skin": ["Omega-3 Supplements", "Moisturizing Cream"],
    "Bumps": ["Topical Antibiotics", "Antifungal Cream"],
    "Sores": ["Topical Antibiotics", "Antiseptics"],
    "Foul Odor": ["Antiseptic Shampoo", "Antibiotics (if infected)"],
    "Flaky Skin": ["Moisturizing Shampoo", "Omega-3 Supplements"],
  
    // Allergies
    "Itchy Skin": ["Apoquel", "Antihistamines"],
    "Sneezing": ["Antihistamines", "Steroidal Nasal Sprays"],
    "Watery Eyes": ["Artificial Tears", "Antihistamine Eye Drops"],
    "Swelling": ["Corticosteroids", "Antihistamines"],
    "Ear Infections": ["Antifungal Ear Drops", "Antibiotic Ear Drops"],
    "Coughing": ["Hydrocodone", "Bronchodilators"],
    "Chewing Paws": ["Corticosteroids", "Apoquel"],
  
    // Mobility Issues
    "Limping": ["Carprofen", "Glucosamine"],
    "Stiffness": ["NSAIDs", "Glucosamine"],
    "Difficulty Standing": ["Gabapentin", "Joint Supplements"],
    "Reluctance to Move": ["NSAIDs", "Tramadol"],
    "Swelling in Joints": ["Corticosteroids", "Carprofen"],
    "Loss of Muscle Mass": ["Omega-3 Supplements", "Physical Therapy"],
  
    // Infections
    "Fever": ["NSAIDs", "Paracetamol (under supervision)"],
    "Swollen Lymph Nodes": ["Antibiotics", "NSAIDs"],
    "Pus Discharge": ["Antibiotics", "Antiseptics"],
    "Lethargy": ["Fluids", "Electrolyte Solutions"],
    "Swelling or Abscesses": ["Antibiotics", "Drainage Procedures"],
  
    // Respiratory Issues
    "Wheezing": ["Bronchodilators", "Steroids"],
    "Difficulty Breathing": ["Oxygen Therapy", "Bronchodilators"],
    "Nasal Discharge": ["Nasal Decongestants", "Antihistamines"],
    "Rapid Breathing": ["Oxygen Therapy", "Bronchodilators"],
    "Blue Gums or Tongue": ["Oxygen Therapy", "Emergency Care"],
  
    // Behavioral Changes
    "Aggression": ["Behavioral Therapy", "Fluoxetine"],
    "Fearfulness": ["Behavioral Therapy", "Clomipramine"],
    "Excessive Barking": ["Training", "Clomipramine"],
    "Restlessness": ["Trazodone", "Fluoxetine"],
    "Hiding": ["Behavioral Therapy", "Anxiety Medication"],
    "Excessive Licking or Grooming": ["Amitriptyline", "Fluoxetine"],
  
    // General Wellness
    "Weight Loss": ["Mirtazapine", "Nutritional Supplements"],
    "Dehydration": ["Fluids", "Electrolyte Solutions"],
    "Behavior Changes": ["Behavioral Therapy", "Anxiety Medication"],
    "Poor Coat Condition": ["Omega-3 Supplements", "Balanced Diet"]
  }; 