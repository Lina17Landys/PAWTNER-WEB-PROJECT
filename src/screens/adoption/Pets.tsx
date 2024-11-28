import BarDash from "../../components/BarDashboard/nav-dash";
import AnimalList from "../../components/pets/pets-type";
import './pets.css'

function PetsAdoption() {
    return (
     <>
     <div className="NavBar-pets"><BarDash/></div>
     <AnimalList/>
     </>
    );
  }
  
  export default PetsAdoption;