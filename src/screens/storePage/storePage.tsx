import './storePage.css'
import BarDash from '../../components/BarDashboard/nav-dash';
import ShopCards from '../../components/shop-cards/shopCards';
import InfoCardShop from '../../components/info-shop/infoShop';
import ShopItems from '../../components/shop-items/shopItems';
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

<section className='products-section'>
<h1>Trending Products</h1>
<ShopItems/>
</section>
   </>
  );
}

export default Shop;
