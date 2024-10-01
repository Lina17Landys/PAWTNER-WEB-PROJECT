import "./dash.css";
import BarDash from "../../components/BarDashboard/nav-dash";
import BannersPets from "../../components/banners/banners";
import ServiceCards from "../../components/service-cards/serviceCard";
function DashBoard() {
  return (
    <>
      <BarDash />
      <BannersPets />

      <div className="services">
        <h2 className="title-serv">Our services</h2>
        <ServiceCards/>
      </div>
    </>
  );
}

export default DashBoard;
