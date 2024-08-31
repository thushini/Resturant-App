import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
            Customers love our service for its quick delivery, fresh meals, and exceptional taste, 
            making dining at home a delight.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p>
        Ready to enjoy delicious meals delivered fast? Order now and experience the convenience and flavor that everyone’s raving about!
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <h2>John Doe</h2>
        </div>

      </div>


    </div>
  )
}

export default Testimonials
