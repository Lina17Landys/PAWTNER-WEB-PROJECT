import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "./dashboard.css";
import BarDash from "../../components/BarDashboard/nav-dash";
import BannersPets from "../../components/Dashboard/banners/banners";
import ServiceCards from "../../components/Dashboard/service-cards/serviceCard";
import BestProducts from "../../components/Dashboard/best-product/best";

function DashBoard() {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsername = async () => {
      setIsLoading(true);
      const user = auth.currentUser;

      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data().username || "");
          } else {
            console.log("El documento del usuario no existe.");
          }
        } catch (error) {
          console.error("Error al obtener el nombre de usuario:", error);
        }
      } else {
        console.log("Usuario no autenticado.");
      }
      setIsLoading(false);
    };

    fetchUsername();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="NavBar">
        <BarDash />
      </div>
      <BannersPets username={username || "User"} />
     

      <div className="services">
        <h2 className="title-serv">Our services</h2>
        <ServiceCards />
      </div>

      <div className="product-recomendation">
        <h2 className="recomendation">Best seller products</h2>
        <BestProducts />
      </div>

      <div className="map-info">
        <h1>Help a friend</h1>
        <p>
          Use our interactive map to help reunite lost pets with their families
          or alert the community about stray animals in need. Whether you've
          found an animal or lost a pet, our 'Help a Friend' feature allows you
          to quickly report the details, share the location, and provide photos
          to help others recognize them. Together, we can ensure that every pet
          finds its way back home.
        </p>

        <div className="buttons-line">
          <Link to ="/ReportSystem"><button className="stray-animal">Report a stray Animal</button></Link>
          <Link to = "/ReportSystem"><button className="stray-animal">Report a lost Animal</button></Link>
        </div>
        <img className="map-img" src="./src/img/mapa-img.png" alt="Map" />
      </div>
    </>
  );
}

export default DashBoard;