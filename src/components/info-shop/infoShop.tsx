import './infoShop.css'

function InfoCardShop() {

    return (
      <>
  <div className="shopCard-line">

<div className="individual-card">
<img className='img-card' src='./src/img/smile-face.png' alt='InfoCard' />
<h2 className='title-shopCard'>Friendly Support</h2>
<p className='info-text'>Share your pet’s symptoms and receive insights and advice</p>
</div>

<div className="individual-card">
<img className='img-card' src='./src/img/checkYes.png' alt='InfoCard' />
<h2 className='title-shopCard'>Free Shipping</h2>
<p className='info-text'>No matter how big or small your purchase is, shipping is free</p>
</div>

<div className="individual-card">
<img className='img-card' src='./src/img/calendar.png' alt='InfoCard' />
<h2 className='title-shopCard'>7 Days Easy Return</h2>
<p className='info-text'>No additional fees</p>
</div>

<div className="individual-card">
<img className='img-card' src='./src/img/thumb-up.png' alt='InfoCard' />
<h2 className='title-shopCard'>Quality Guaranted</h2>
<p className='info-text'>You can find the best products in here</p>
</div>
  </div>
  
      </>
    )
  }
  
  export default InfoCardShop