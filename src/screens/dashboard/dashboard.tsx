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
        <ServiceCards/>
      </div>

      <div className="product-recomendation">
        <h2>Best seller products</h2>
        <BestProducts/>
      </div>
    </>
  );
}

export default DashBoard;
