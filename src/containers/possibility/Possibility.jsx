import React from 'react'
import './possibility.css';
import  possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='aibuilder__possibility section__padding' id="possibility">
      <div className="aibuilder__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="aibuilder__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilites are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. Tempora, autem sequi iste dolore voluptates voluptas ex laboriosam ipsa maxime.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility