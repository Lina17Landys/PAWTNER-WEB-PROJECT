//import { useState } from 'react'
import './Lan-cards.css'

function LanCards() {

  return (
    <>
    <div className='cards-line'>
    <div className='card'>
        <img className='iconLine' src='./src/img/Heart-with-dog-paw.png'></img>
        <h1 className='title'>Adopt</h1>
        <p className='description'>Find your ideal pet with this fast questions!</p>
    </div>

    <div className='card'>
        <img className='iconLine' src='./src/img/house.png'></img>
        <h1 className='title'>Report</h1>
        <p className='description'>Did you saw a lost pet or an street animal that needs help? Report it here.</p>
    </div>

    <div className='card'>
        <img className='iconLine' src='./src/img/health-paw.png'></img>
        <h1 className='title'>Caring</h1>
        <p className='description'>Have questions about your pet’s health? Check more information here!</p>
    </div>

    <div className='card'>
        <img className='iconLine-bone' src='./src/img/bone.png'></img>
        <h1 className='title'>Shop</h1>
        <p className='description'>A large selection of the best pet products in the market.</p>
    </div>

</div>

    </>
  )
}

export default LanCards
