import "./dash.css";
import BarDash from "../../components/BarDashboard/nav-dash";
import BannersPets from "../../components/banners/banners";
import ServiceCards from "../../components/service-cards/serviceCard";
import BestProducts from "../../components/best-product/best";
function DashBoard() {
  return (
    <>
      <BarDash />
      <BannersPets />

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
          <button className="stray-animal">Report a stray Animal</button>
          <button className="stray-animal">Report a lost Animal</button>
        </div>
        <img className="map-img" src="./src/img/mapa-img.png" />
      </div>

      <div className="forum-info">
  <img className="sick-dog" src="./src/img/sick-dog.png" />

  <div className="forum-container">
    <h1 className="Forum-title">Pet Health Forum</h1>
    <p className="place-holder">
      Is your pet sick or in pain? Check out our collaborative forum to
      see what might be wrong with your buddy.
    </p>
  </div>
</div>

    </>
  );
}

export default DashBoard;
