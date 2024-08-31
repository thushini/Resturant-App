import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoDate =[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Choose meals rich in nutrients, balancing proteins, carbs, and veggies to maintain energy and overall health"
        },
        {
            image:ChooseMeals,
            title:"Choose How Often",
            text:"Opt for meals that include lean proteins, whole grains, and colorful vegetables for a balanced and nutritious diet."
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text:"Enjoy quick, reliable deliveries that bring fresh, delicious meals straight to your door, saving you time and effort."
        },

    ];
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='heading'>How It Works</h1>
        <p className='primary-text'>
        Our service is simple: browse the menu, select your favorite dishes, place your order online,
        and relax while we prepare and deliver your meal swiftly. Enjoy fresh, tasty food at your convenience.
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoDate.map((data)=>(
            <div className='work-section-info'>
                <div className='info-boxes-img-container'>
                    <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
        )
        )}
      </div>
    </div>
  )
}

export default Work
