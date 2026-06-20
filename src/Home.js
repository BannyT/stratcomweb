import React from 'react'
import Header from './Header'
import Carousel from './Carousel';
import Services from './Services';
import AboutUs from './AboutUS';
import Footer from './Footer';

function Home() {
  return (
    <div>
    
      <Carousel autoPlayInterval={5000} />
      <AboutUs/>
      <Services/>
      {/* <Footer/>  */}
    </div>
  )
}

export default Home