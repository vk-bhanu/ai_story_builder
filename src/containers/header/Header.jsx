import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="aibuilder__header section__padding" id="home">
      <div className="aibuilder__header-content">
        <h1 className='gradient__text'>Create new Stories with help of GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. Tempora, autem sequi iste dolore voluptates voluptas ex laboriosam ipsa maxime.</p>

        <div className="aibuilder__header-content__input">
          <input type="email" placeholder='abcd@email.com'/>
          <button type="button">Get Started</button>
        </div>

        <div className="aibuilder__header-content__people">
          <img src={people} alt="people" />
          <p>2500 users created new stories in last 24 Hours!</p>
        </div>
        </div>
        <div className="aibuilder__header-image">
     <img src={ai} alt="AI"/>
  </div>
    </div>
  )
}

export default Header