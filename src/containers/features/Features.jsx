import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';
const featuresData =[
  {
    title:'Improving itself constanly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi.'
  },
  {
    title:'Actively Creating',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi.'
  },
  {
    title:'Create your Own Genres',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi.'
  },
  {
    title:'Collaborate with other Users',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores repellendus possimus minus earum nostrum rerum saepe dolorem animi.'
  },

]

const Features = () => {
  return (
    <div className='aibuilder__features section__padding' id='features'>
      <div className="aibuilder__features-heading">
        <h1 className='gradient__text'>The Future of Story Writing is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access</p>
      </div>
      <div className="aibuilder__features-container">
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index } />
        ))}
      </div>
    </div>
  )
}

export default Features