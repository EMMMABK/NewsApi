import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        return(
            <div className="card">
                <img src={curItem.urlToImage} alt="" />
                <div className="cardContent">
                    <a className='cardContent_title'>{curItem.title}</a>
                    <p className='cardContent_subtitle'>{curItem.description}</p>
                    <button onClick={() => {
                      curItem.url
                    }} className='ReadBtn'>Read More</button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card
