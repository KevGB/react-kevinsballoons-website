import React from 'react';
// import NavigationBarSmall from './components/NavigationBar';
import NavigationBarLarge from './components/NavigationBarLarge';
import ScrollingGallery from './components/ScrollingGallery';
import ScrollingLogos from './components/ScrollingLogos';
import SubscribeForm from './components/SubscribeForm';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';
import FAB from './components/FAB';
import BookingForm from './components/bookingForm/bookingForm';
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
    <BookingForm/>
    <Footer/>
    </>
  );
}

export default App;
