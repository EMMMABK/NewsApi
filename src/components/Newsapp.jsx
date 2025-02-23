import React from 'react'

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div className="">Trend News</div>
        <ul>
            <a href="">All News</a>
            <a href="">Trending</a>
        </ul>
        <div className="searchBar">
            <input type="text" placeholder='Search News'/>
            <button>Search</button>
        </div>
      </nav>
    </div>
  )
}

export default Newsapp
