import React from 'react'
import Navbar from './Navbar';
import BannerBackround from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src= {BannerBackround} alt="" />

        </div>
        <div className='home-text-section'>
            <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text'>
                Haelthy switcher chefs do all the preps work,like peeding,
                chopping 
                & marinating, so you can cook a fresh food
            </p>
            <button className=' secondary-button'>
                Order Now <FiArrowRight/>
            </button>

        </div>
        <div className='home-image-container'>
            <img src={BannerImage} alt="" />
        </div>
        

      </div>
    </div>
  )
}

export default Home
