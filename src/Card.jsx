import React from 'react'
import star from "/assets/free_icon_1.svg"

// import potrait from "../assets/akachi.jpg"
const Card = (props) => {
  console.log(props)
  return (
    <div id='card' className='m-3 rounded-lg inline-block w-1/3 '>
      <div className="image">
        <img src={props.path} className=' rounded-lg' alt="sri" />
      </div>
      <div className="details">
        <div className="rating flex gap-1 my-1">
            <img src={star} alt="star" />
            <p id="rating">{props.rating}</p>
            <p id="count" className='text-gray-600'>({props.count}) &bull;</p>
            <p id="country" className='text-gray-600'>{props.country}</p>
        </div>
        <div className="desc my-1">{props.desc}</div>
        <div id="price" className='font-semibold my-1'>From ${props.price} / <span className='font-normal'>person</span></div>
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