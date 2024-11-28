import BannerImg from '../../assets/images/Dashboard/Banner-img.png'
import CatsBanner from '../../assets/images/Dashboard/CatBanner.png'
import DogsBanner from '../../assets/images/Dashboard/DogBanner.png'
interface BannersPetsProps {
  username: string;
}

function BannersPets({ username }: BannersPetsProps) {
  return (
    <>
      <div className='welcome-banner'>
        <h1 className='welcome-title'>Welcome, {username}</h1>
        <img className='welcome-img' src={BannerImg} alt='welcome' />
      </div>

      <div className='pets-banner-section'>
        <div className='cats-banner'>
          <img className='cat-b' src={CatsBanner} alt='catBanner' />
          <div className='cats-content'>
            <h1 className='cats-banner-title'>Cats</h1>
            <p className='cats-banner-description'>Discover the perfect cat to welcome into your home.</p>
          </div>
        </div>
        <div className='dogs-banner'>
        <img className='dog-b' src={DogsBanner} alt='dogBanner' />
          <h1 className='dogs-banner-title'>Dogs</h1>
          <p className='dogs-banner-description'>Explore our selection of loyal and loving dogs ready for adoption.</p>
        </div>
      </div>
    </>
  );
}

export default BannersPets;