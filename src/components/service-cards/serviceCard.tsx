import "./service.css"
function ServiceCards() {
  return (
    <>
    <div className='cardServ-line'>
    <div className='cardServ'>
        <img className='i-Line' src='./src/img/award.png'></img>
        <h1 className='title-s'>Find a friend</h1>
        <p className='description-s'>Take a quiz and discover your ideal pet</p>
    </div>

    <div className='cardServ'>
        <img className='i-Line' src='./src/img/search.png'></img>
        <h1 className='title-s'>Pawtner Shop</h1>
        <p className='description-s'>Find everything your pet needs, from nutritious food to essential care products.</p>
    </div>

    <div className='cardServ'>
        <img className='i-Line' src='./src/img/cloud.png'></img>
        <h1 className='title-s'>Help a Friend</h1>
        <p className='description-s'>Report lost or stray animals in your area.</p>
    </div>

    <div className='cardServ'>
        <img className='i-Line' src='./src/img/termometer.png'></img>
        <h1 className='title-s'>Pet Health Forum</h1>
        <p className='description-s'>Share your pet’s symptoms and receive insights and advice</p>
    </div>
</div>
    </>
  );
}

export default ServiceCards;