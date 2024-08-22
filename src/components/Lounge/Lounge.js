import React, {useEffect} from 'react';
import service from '../../asserts/service.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='longue container section'>
      <div className="sectionContainer grid">
      
        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="2500">Unaccompained Minor Lounge</h2>
        </div>
        
    <div className="grids grid">
        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
          <span className="gridTitle">
            Help.though.the.airpot
          </span>
          <p>
            You can also call airlines from your phone and book a flight
            ticket to one of your favorite destination.
          </p>
        </div>

        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
          <span className="gridTitle">
            care on the flight
          </span>
          <p>
            You can also call airlines from your phone and book a flight
            ticket to one of your favorite destination.
          </p>
        </div>

        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
          <span className="gridTitle">
            Chauffeur-drive service
          </span>
          <p>
            You can also call airlines from your phone and book a flight
             ticket to one of your favorite destination.
          </p>
        </div>

        <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
          <span className="gridTitle">
            priority Boarding
          </span>
          <p>
            You can also call airlines from your phone and book a flight
             ticket to one of your favorite destination.
          </p>
        </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
          <img src={service} alt='service'/>
        </div>
        
      </div>
      </div>
  )
}

export default Lounge