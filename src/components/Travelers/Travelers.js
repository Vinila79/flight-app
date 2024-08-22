import React, {useEffect} from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import paris from "../../asserts/paris.jpg";
import NewYark from "../../asserts/newYark.png";
import dubai from "../../asserts/dubai.png";
import London from "../../asserts/london.png"

import traveler1 from "../../asserts/traveler1.jpg";
import traveler2 from "../../asserts/traveler2.png";
import traveler3 from "../../asserts/traveler3.png";
import traveler4 from "../../asserts/traveler4.png"

const travelers = [

  {
    id : 1,
    destinationImage : paris,
    travelerImage : traveler1,
    travelerName : 'IsraTech',
    socialLink : '@isratech8'
  },
  {
    id : 2,
    destinationImage : dubai,
    travelerImage : traveler2,
    travelerName : 'Nicole Web',
    socialLink : '@nicolweb'
  },
  {
  id : 3,
  destinationImage : NewYark,
  travelerImage : traveler3,
  travelerName : 'Wilson Lindsey',
  socialLink : '@wilsonlindsey'
},
{
  id : 4,
  destinationImage : London,
  travelerImage : traveler4,
  travelerName : 'Naresh Lamer',
  socialLink : '@nareshlamer'
}

]
const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">Top travelrs of this month!</h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, 
              socialLink}) => {
              return(
                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
            <img src={destinationImage} className='destinationImage' alt='paris'/>

            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={travelerImage} className="travelerImage" alt='traveler1'/>
               </div>

               <div className="travelerName">
                 <span>{travelerName}</span>
                 <p>{socialLink}</p>
               </div>
            </div>
 
          </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Travelers