import React from 'react'
import star from "/assets/free_icon_1.svg"

// import potrait from "../assets/akachi.jpg"
const Card = (props) => {
  let {path, rating, count, location, desc, price, openSpots}= props.item
  let badgeText
  if(openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(location === 'online')
  {
    badgeText= "ONLINE"
  }
  return (
    <div id='card' className='m-3 relative rounded-lg inline-block w-1/3 cursor-pointer '>
      {badgeText!== null && <div className='absolute top-1 left-1  bg-slate-200 p-2 font-semibold rounded' id="badge">{badgeText}</div>}
      <div className="image">
        <img src={path} className=' rounded-lg' alt="sri" />
      </div>
      <div className="details">
        <div className="rating flex gap-1 my-1">
            <img src={star} alt="star" />
            <p id="rating">{rating}</p>
            <p id="count" className='text-gray-600'>({count}) &bull;</p>
            <p id="location" className='text-gray-600'>{location}</p>
        </div>
        <div className="desc my-1">{desc}</div>
        <div id="price" className='font-semibold my-1'>From ${price} / <span className='font-normal'>person</span></div>
      </div>
    </div>
  )
}

export default Card



// WE CAN DO THIS TOO
// Destructuring props
// const card = (props)=>{
//   const {path,name} = props
//   console.log(path)
//   console.log(name)
// }