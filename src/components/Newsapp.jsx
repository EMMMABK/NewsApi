import React from 'react'
import Card from './Card'

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div className="trend_news">Trend News</div>
        <ul>
            <a href="#">All News</a>
            <a href="#">Trending</a>
        </ul>
        <div className="searchBar">
            <input type="text" placeholder='Search News'/>
            <button className='btn_for_search'>Search</button>
        </div>
      </nav>
      <div className="">
        <p className='head'>Stay Update with Trend News</p>
      </div>
      <div className="categoryBtn">
        <button className='category_btn_choose'>Sports</button>
        <button className='category_btn_choose'>Politics</button>
        <button className='category_btn_choose'>Entertainment</button>
        <button className='category_btn_choose'>Health</button>
        <button className='category_btn_choose'>Fitness</button>
      </div>

      <div className="cards">
        <Card/>
      </div>
    </div>
  )
}

export default Newsapp
