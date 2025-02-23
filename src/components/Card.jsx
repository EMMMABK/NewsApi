import React from 'react'

const Card = ({data}) => {
    console.log(data);
    const readMore = (url) => {
      window.open(url)
    }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        return(
            <div className="card">
                <img src={curItem.urlToImage} alt="" />
                <div className="cardContent">
                    <a className='cardContent_title'>{curItem.title}</a>
                    <p className='cardContent_subtitle'>{curItem.description}</p>
                    <button onClick={() => window.open(curItem.url)} className='ReadBtn'>Read More</button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
