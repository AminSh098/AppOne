import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import.js';


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article imageUrl={blog01} date="sep 26, 2021" title="GPT-3 and Open AI is the future.Let us explore how it is?" />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article imageUrl={blog02} date="sep 26, 2021" title="GPT-3 and Open AI is the future.Let us explore how it is?" />
          <Article imageUrl={blog03} date="sep 26, 2021" title="GPT-3 and Open AI is the future.Let us explore how it is?" />
          <Article imageUrl={blog04} date="sep 26, 2021" title="GPT-3 and Open AI is the future.Let us explore how it is?" />
          <Article imageUrl={blog05} date="sep 26, 2021" title="GPT-3 and Open AI is the future.Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog