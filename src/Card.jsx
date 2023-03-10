import React from 'react'
import star from "/assets/free_icon_1.svg"

// import potrait from "../assets/akachi.jpg"
const Card = (props) => {
  let {path, rating, count, location, desc, price, openSpots}= props
  // The above literally means that the props is itself an object with directly the properties which I can assign to my keys here directly
  let badgeText
  if(openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(location.toLowerCase() === 'online')
  {
    badgeText= "ONLINE"
  }
  return (
    // After using Object Spread syntax
    <div id='card' className='w-1/3 m-3 bg-red-300 relative rounded-lg inline-block  cursor-pointer '>
      {badgeText && <div className='absolute top-1 left-1  bg-slate-200 p-2 font-semibold rounded' id="badge">{badgeText}</div>}
      <div className="image">
        <img src={path} className='rounded-lg' alt="sri" />
      </div>
      <div className="details whitespace-pre-line">
        <div className="rating flex gap-1 m-1">
            <img src={star} alt="star" />
            <p id="rating">{rating}</p>
            <p id="count" className='text-gray-600'>({count}) &bull;</p>
            <p id="location" className='text-gray-600'>{location}</p>
        </div>
        <p className="w-fit desc m-1">{desc}</p>
        <p id="price" className='font-semibold m-1'>From ${price} / <span className='font-normal'>person</span></p>
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