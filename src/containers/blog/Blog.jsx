import React from 'react'
import  Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';
const Blog = () => {
  return (
    <div className='aibuilder__blog scetion__padding' id='blog'>
      <div className="aibuilder__blog-heading">
        <h1 className='gradient__text'>A lot is Happening. We are blogging about it.</h1>
      </div>
      <div className="aibuilder__blog-container">
        <div className="aibuilder__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 25, 2023" title="GPT-3 and OpenAI is the Future. Let us explore how it is?"/>
        </div>
        <div className="aibuilder__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 25, 2023" title="GPT-3 and OpenAI is the Future. Let us explore how it is?" />
          <Article imgUrl={blog03} date="Sep 25, 2023" title="GPT-3 and OpenAI is the Future. Let us explore how it is?" />
          <Article imgUrl={blog04} date="Sep 25, 2023" title="GPT-3 and OpenAI is the Future. Let us explore how it is?" />
          <Article imgUrl={blog05} date="Sep 25, 2023" title="GPT-3 and OpenAI is the Future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog