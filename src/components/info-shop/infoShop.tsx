import './infoShop.css';
import HappyFace from '../../assets/Illustrations-details/smile-face.png';
import Check from '../../assets/Illustrations-details/checkYes.png';
import Calendar from '../../assets/Illustrations-details/calendar.png';
import ThumbUp from '../../assets/Illustrations-details/thumb-up.png';

function InfoCardShop() {
  return (
    <div className="shopCard-line">
      <div className="individual-card">
        <img className="img-card" src={HappyFace} alt="Friendly Support" />
        <h2 className="title-shopCard">Friendly Support</h2>
        <p className="info-text">Share your pet’s symptoms and receive insights and advice</p>
      </div>

      <div className="individual-card">
        <img className="img-card" src={Check} alt="Free Shipping" />
        <h2 className="title-shopCard">Free Shipping</h2>
        <p className="info-text">No matter how big or small your purchase is, shipping is free</p>
      </div>

      <div className="individual-card">
        <img className="img-card" src={Calendar} alt="7 Days Easy Return" />
        <h2 className="title-shopCard">7 Days Easy Return</h2>
        <p className="info-text">No additional fees</p>
      </div>

      <div className="individual-card">
        <img className="img-card" src={ThumbUp} alt="Quality Guaranteed" />
        <h2 className="title-shopCard">Quality Guaranteed</h2>
        <p className="info-text">You can find the best products here</p>
      </div>
    </div>
  );
}

export default InfoCardShop;
