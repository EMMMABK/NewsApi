import React from 'react'
import './css/styles.css';

const Card = ({data}) => {
    console.log(data);
    const readMore = (url) => {
      window.open(url)
    }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        if(!curItem.urlToImage){
          return null
        }else{
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
        }
      })}
    </div>
  )
}

export default Card
