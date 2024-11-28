import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../../context/QuizContext/QuizContext';
import Button from '../../../components/Shared/Button/Button';
import './ResultScreen.css';
import ResultCatImage from '../../../assets/images/Quiz-illustration/Result-Cat-Img.png';
import ResultDogImage from '../../../assets/images/Quiz-illustration/Result-Dog-Img.png';
import { dogs, cats } from '../../../services/pets';
import PetsDetail from '../../../components/pets/petsDetail';

interface Animal {
  name: string;
  size: string;
  age: string | number;
  image: string;
  personality: string;
  temperament: string[];
}

const ResultScreen: React.FC = () => {
  const { getResult } = useQuiz();
  const result = getResult();
  const navigate = useNavigate();

  const resultData = {
    cat: {
      title: "You’ve Been Matched with a Feline Friend!",
      description: "Based on your answers, a cat is the perfect companion for you...",
      image: ResultCatImage,
      animals: cats,
    },
    dog: {
      title: "You’ve Been Matched with a Canine Companion!",
      description: "Great news! Based on your quiz results, a dog is your ideal match...",
      image: ResultDogImage,
      animals: dogs,
    },
  };

  const { description, image, title, animals } = resultData[result];
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const getRandomAnimals = (animalList: typeof dogs | typeof cats, count: number) => {
    const shuffled = animalList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomAnimals = getRandomAnimals(animals, 3);

  const handleMoreInfo = (animal: Animal) => {
    setSelectedAnimal({
      ...animal,
      age: typeof animal.age === 'number' ? `${animal.age} years old` : animal.age,
    });
  };

  const handleBack = () => setSelectedAnimal(null);
  const handleRestart = () => navigate('/Quiz');

  return (
    <div className="result-screen">
      {selectedAnimal ? (
        <PetsDetail
          name={selectedAnimal.name}
          size={selectedAnimal.size}
          age={`${selectedAnimal.age}`} 
          image={selectedAnimal.image}
          personality={selectedAnimal.personality}
          temperament={selectedAnimal.temperament}
          onBack={handleBack}
        />
      ) : (
        <>
          <h4 className="quiz-header">Pawtner Quiz</h4>
          <img src={image} alt={result === 'cat' ? 'Cat' : 'Dog'} className="result-image" />
          <h1 className="result-title">{title}</h1>
          <p className="animal-text">{result === 'cat' ? 'A Cat' : 'A Dog'}</p>
          <div className="result-box">
            <div className="result-content">
              <p className="result-text">{description}</p>
              <div className="result-buttons">
                <Button onClick={() => navigate('/PetsAdoption')} label="See more Pets" className="button" />
                <Button onClick={handleRestart} label="Retake Quiz" className="button" />
              </div>
            </div>
          </div>
          <p className="result-subtext">
            Explore our available pets and find the one that’s ready to bring warmth and companionship to your home.
          </p>
          <div className="random-animals-container">
            {randomAnimals.map((animal, index) => (
              <div key={index} className="animal-card">
                <img src={animal.image} alt={animal.name} className="animal-image" />
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-age">
                  Age: {typeof animal.age === 'number' ? `${animal.age} years` : animal.age}
                </p>
                <p className="animal-personality">{animal.personality}</p>
                <button onClick={() => handleMoreInfo(animal)} className="button-more-info">
                  More Info
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultScreen;
