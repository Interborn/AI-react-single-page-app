import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Jan 24 2023' title='How GPT-3 and OpenAi will shape technology in the next decade.' />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='Jan 24 2023' title='How GPT-3 and OpenAi will shape technology in the next decade.' />
          <Article imgUrl={blog03} date='Jan 24 2023' title='How GPT-3 and OpenAi will shape technology in the next decade.' />
          <Article imgUrl={blog04} date='Jan 24 2023' title='How GPT-3 and OpenAi will shape technology in the next decade.' />
          <Article imgUrl={blog05} date='Jan 24 2023' title='How GPT-3 and OpenAi will shape technology in the next decade.' />
        </div>
      </div>
    </div>
  )
}

export default Blog;
