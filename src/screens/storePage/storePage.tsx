import './storePage.css'
import BarDash from '../../components/BarDashboard/nav-dash';
import ShopCards from '../../components/shop-cards/shopCards';
import InfoCardShop from '../../components/info-shop/infoShop';

function Shop() {
  return (
    <>
   <BarDash/>
   <div className="shop-banner-container">
  <img className="shop-banner" src="./src/img/shopBanner.png" />
</div>

<h1>Top Categories</h1>

<ShopCards/>
<InfoCardShop/>
   </>
  );
}

export default Shop;
