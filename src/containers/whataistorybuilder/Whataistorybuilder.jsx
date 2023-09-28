import React from 'react'
import Feature  from '../../components/feature/Feature';
import './whataistorybuilder.css';
const Whataistorybuilder = () => {
  return (
    <div className="aibuilder__whataibuilder scetion margin" id='waib'>
      <div className="aibuilder__whataibuilder-feature">
        <Feature title ="What is GPT-3"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. Tempora, autem sequi iste dolore voluptates voluptas ex laboriosam ipsa maxime." />
      </div>
      <div className="aibuilder__whataibuilder-heading">
        <h1 className='gradient__text'>Possibilites beyond Imagination</h1>
        <p>Explore New Worlds</p>
      </div>
      <div className="aibuilder__whataibuilder-container">

        <Feature title= "Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. " />

        <Feature title= "Knowledge" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. ." />

        <Feature title= "Educatin" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi. " />
      </div>
    </div>
  )
}

export default Whataistorybuilder