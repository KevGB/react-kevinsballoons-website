import React from 'react';
// import NavigationBarSmall from './components/NavigationBar';
import NavigationBarLarge from './components/NavigationBarLarge';
import ScrollingGallery from './components/ScrollingGallery';
import ScrollingLogos from './components/ScrollingLogos';
import SubscribeForm from './components/SubscribeForm';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';
import FAB from './components/FAB';
import BookingForm from './components/booking-Form/bookingForm';
import CyclicGallery from './components/CyclicGallery';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <>
    {/* <NavigationBarSmall/> */}
    <NavigationBarLarge/>
    <ScrollingGallery/>
    <ScrollingLogos/>
    <FAB/>
    <SubscribeForm/>
    <TestimonialCarousel/>
    <CyclicGallery/>
    <VideoPlayer/>
    <BookingForm/>
    <Footer/>
    </>
  );
}

export default App;
