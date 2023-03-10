import React from 'react'

const Color = (props) => {
  return (
    <div>
      <h2>{props.color}</h2>
     <div className={`w-20 h-20 border rounded-lg bg-[#${props.show}]`}></div>
    </div>
  )
}

export default Color

