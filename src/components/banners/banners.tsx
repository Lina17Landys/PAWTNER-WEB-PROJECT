interface BannersPetsProps {
  username: string;
}

function BannersPets({ username }: BannersPetsProps) {
  return (
    <>
      <div className='welcome-banner'>
        <h1 className='welcome-title'>Welcome, {username}</h1>
        <img className='welcome-img' src='./src/img/welcome-banner.png' alt='welcome' />
      </div>

      <div className='pets-banner'>
        <img className='cat-b' src='./src/img/cat-banner.png' alt='catBanner' />
        <img className='dog-b' src='./src/img/dog-banner.png' alt='dogBanner' />
      </div>
    </>
  );
}

export default BannersPets;