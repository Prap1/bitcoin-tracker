import React from 'react'
import './Card.css'
import bitcoin from '../../assets/bitcoin.png'
import { IoIosArrowDown } from 'react-icons/io';
const Card = () => {
  return (
    
    <div class="card">
    <div className='bit'>
    <img src={bitcoin} alt='bitcoin'/>
    <div className='text'>Bitcoin</div>
    <div className='tex'>BTC</div>
    </div>
    <div class="card-content">
        <div className='number'>
      <h2>7654532</h2>
      <p>77</p>
      </div>
      <IoIosArrowDown className='icon'/>
    </div>
  </div>
  

  )
}

export default Card