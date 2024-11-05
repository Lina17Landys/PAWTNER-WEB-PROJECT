import { useState, useEffect } from 'react';
import { dogs } from '../../services/pets';
import cats from '../../services/pets';
import './animals.css';

interface Animal {
    name: string;
    size: string;
    age: string; 
    image: string;
}
  
const AnimalList = () => {
    const [animals, setAnimals] = useState<Animal[]>([]); 

    const showDogs = () => {
        const formattedDogs = dogs.map(dog => ({
            ...dog,
            age: typeof dog.age === "string" ? dog.age : `${dog.age} years old`, 
        }));
        setAnimals(formattedDogs);
    };

    const showCats = () => {
        const formattedCats = cats.map(cat => ({
            ...cat,
            age: typeof cat.age === "string" ? cat.age : `${cat.age} years old`, 
        }));
        setAnimals(formattedCats);
    };

    // Llama a showDogs automáticamente cuando el componente se monta
    useEffect(() => {
        showDogs();
    }, []);

    return (
        <div className="animal-list">
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
                        <button className='select-pet'>Information</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimalList;
