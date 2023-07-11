import React from "react";
import Homepage from "./pages/Homepage";
import Servicespage from "./pages/Servicespage";
import Contactpage from "./pages/Contactpage";
import Bookingpage from "./pages/Bookingpage";
import NavigationBarLarge from "./components/NavigationBarLarge";
import ThankYouPage from "./pages/ThankYouPage";
import Gallerypage from "./pages/Gallerypage";
import Archespage from "./pages/Archespage";
import Centerpiecepage from "./pages/Centerpiecepage";
import Columnpage from "./pages/Columnpage";
import Garlandpage from "./pages/Garlandpage";
import StartForm from "./components/booking-Form/pages/StartForm";
import DurationForm from "./components/booking-Form/pages/DurationForm";
import WhenForm from "./components/booking-Form/pages/WhenForm";
import WhereForm from "./components/booking-Form/pages/WhereForm";
import GuestsForm from "./components/booking-Form/pages/GuestForm";
import PersonalInfo from "./components/booking-Form/pages/PersonalInfo";
import AdditionalInfo from "./components/booking-Form/pages/AdditionalInfo";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

import TwistingForm from "./components/twistingform/twistingform";

function App() {
  return (
    <div className="App">
      <NavigationBarLarge className="navigationbar" sticky />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="services" element={<Servicespage />} />
        <Route path="contact" element={<Contactpage />} />
        <Route path="book" element={<Bookingpage />} />
        <Route path="thankyou" element={<ThankYouPage />} />
        <Route path="columns" element={<Columnpage />} />
        <Route path="arches" element={<Archespage />} />
        <Route path="centerpieces" element={<Centerpiecepage />} />
        <Route path="garlands" element={<Garlandpage />} />
        <Route path="gallery" element={<Gallerypage />} />
        <Route path="bookingformstart" element={<StartForm />} />
        <Route path="bookingformduration" element={<DurationForm />} />
        <Route path="bookingforminfo" element={<PersonalInfo />} />
        <Route path="bookingformwhen" element={<WhenForm />} />
        <Route path="bookingformwhere" element={<WhereForm />} />
        <Route path="bookingformguests" element={<GuestsForm />} />
        <Route path="bookingformadditional" element={<AdditionalInfo />} />
        
        <Route path="twistingform" element={<TwistingForm />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
