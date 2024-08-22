import React,{useEffect} from 'react'
import video from '../../asserts/planevideo.mp4'
// import flight from '../../asserts/flight.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>
          Fight Booking App</h1>
      </div>
      <div data-aos="fade-down" data-aos-duration="2500" className='homeImages flex'>
        <div className="videoDiv">
        <video src={video} autoPlay muted loop className='video'/>
        </div>
        {/* <img src={flight} className='plane' alt='plane'/> */}
        
      </div>
    </div>
  )
}

export default Home;