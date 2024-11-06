import { useState, useEffect } from 'react';
import { dogs } from '../../services/pets';
import cats from '../../services/pets';
import './animals.css';
import PetsDetail from './petsDetail';

interface Animal {
    name: string;
    size: string;
    age: string;
    image: string;
    personality: string;
    temperament: string[];
}

const AnimalList = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
    const [category, setCategory] = useState<'dogs' | 'cats'>('dogs'); 

    useEffect(() => {
        showDogs(); 
    }, []);

    const showDogs = () => {
        const formattedDogs = dogs.map(dog => ({
            ...dog,
            age: typeof dog.age === "string" ? dog.age : `${dog.age} years old`,
        }));
        setAnimals(formattedDogs);
        setCategory('dogs');
    };

    const showCats = () => {
        const formattedCats = cats.map(cat => ({
            ...cat,
            age: typeof cat.age === "string" ? cat.age : `${cat.age} years old`,
        }));
        setAnimals(formattedCats);
        setCategory('cats'); 
    };

    const handleSelectAnimal = (animal: Animal) => {
        setSelectedAnimal(animal);
    };

    const handleBack = () => {
        setSelectedAnimal(null);
    };

    const getCategoryImage = () => {
        if (category === 'dogs') {
            return <img src="./src/img/dogPetLong.png" alt="Dog Banner" className="category-banner" />;
        } else if (category === 'cats') {
            return <img src="./src/img/catPetLong.png" alt="Cat Banner" className="category-banner" />;
        }
    };

    return (
        <div className="animal-list">
            {selectedAnimal ? (
                <PetsDetail 
                    name={selectedAnimal.name} 
                    size={selectedAnimal.size} 
                    age={selectedAnimal.age} 
                    image={selectedAnimal.image} 
                    personality={selectedAnimal.personality} 
                    temperament={selectedAnimal.temperament}
                    onBack={handleBack}
                />
            ) : (
                <>
                    <div className="category-banner-container">
                        {getCategoryImage()}
                    </div>

                    <div className="buttons">
                        <button onClick={showDogs} className="btn-animal">Show Dogs</button>
                        <button onClick={showCats} className="btn-animal">Show Cats</button>
                    </div>

                    <div className="animal-grid">
                        {animals.map((animal, index) => (
                            <div key={index} className="animal-card">
                                <img src={animal.image} alt={animal.name} className="animal-image" />
                                <h3 className="animal-name">{animal.name}</h3>
                                <p className="animal-size">Size: {animal.size}</p>
                                <p className="animal-age">Age: {animal.age}</p>
                                <button onClick={() => handleSelectAnimal(animal)} className='select-pet'>Information</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AnimalList;
