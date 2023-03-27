import React from "react";
// import "./bookingform.css";
import { Routes, Route } from "react-router-dom";
import StartForm from "./pages/StartForm";
import DurationForm from "./pages/DurationForm";
import WhenForm from "./pages/WhenForm";
import WhereForm from "./pages/WhereForm";
import GuestsForm from "./pages/GuestForm";
import PersonalInfo from "./pages/PersonalInfo";
import ThankYouPage from "../../pages/ThankYouPage";
import AdditionalInfo from "./pages/AdditionalInfo";

function BookingForm() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartForm />} />
        <Route path="bookingFormInfo" element={<PersonalInfo />} />
        <Route path="bookingFormDuration" element={<DurationForm />} />
        <Route path="bookingFormWhen" element={<WhenForm />} />
        <Route path="bookingFormWhere" element={<WhereForm />} />
        <Route path="bookingFormGuests" element={<GuestsForm />} />
        <Route path="bookingFormAdditional" element={<AdditionalInfo />} />
        <Route path="thankyou" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default BookingForm;
