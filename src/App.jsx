import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './Card'
import data from './components/data'
function App() {
  const [count, setCount] = useState(0)
  const carouselData = data.map(item => {
    return <Card 
    key={item.id}
    // This key property should be unique for every item in the dataset. 
    //When using an API you'll get IDs in the data, which are unique for every data object
    
    {...item}

    // item={item} //Instead of passing the item as a new property we can do the above by object spreading
    /*    
    ** Instead of passing multiple properties, we can send the whole item and figure out how to use them in the component itself. Like the above
    * path={item.path}
    * rating={item.rating}
    * count={item.count} 
    * country={item.country} 
    * desc={item.desc} 
    * price={item.price}
    * openSpots={item.openSpots}
     */
    />
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="carousel w-2/3 m-auto relative flex items-center">
        <div id="slider" className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        
        {carouselData}

        {/* THE ABOVE CAN BE DONE LIKE THIS TOO */}
        {/* {data.map(item => {
    return <Card path={item.path} rating={item.rating} count={item.count} country={item.country} desc={item.desc} price={item.price} />
  })} */}
        </div>
      </div>

    </div>
  )
}


export default App
