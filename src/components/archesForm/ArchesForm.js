import React from "react";
// import "./bookingform.css";
import { Routes, Route } from "react-router-dom";
import ArchesStartForm from "./pages/ArchesStartForm";
import ArchesDurationForm from "./pages/ArchesDurationForm";
import ArchesWhenForm from "./pages/ArchesWhenForm";
import ArchesWhereForm from "./pages/ArchesWhereForm";
import ArchesGuestsForm from "./pages/ArchesGuestForm";
import ArchesPersonalInfo from "./pages/ArchesPersonalInfo";
import ThankYouPage from "../../pages/ThankYouPage";
import ArchesAdditionalInfo from "./pages/ArchesAdditionalInfo";

function BookingForm() {
  return (
    <div className="App">
        <Routes>
          <Route path="/archesFormStart" element={<ArchesStartForm />} />
          <Route path="archesFormInfo" element={<ArchesPersonalInfo />} />
          <Route path="archesFormDuration" element={<ArchesDurationForm />} />
          <Route path="archesFormWhen" element={<ArchesWhenForm />} />
          <Route path="archesFormWhere" element={<ArchesWhereForm />} />
          <Route path="archesFormGuests" element={<ArchesGuestsForm />} />
          <Route path="archesFormAdditional" element={<ArchesAdditionalInfo />} />
          <Route path="thankyou" element={<ThankYouPage />} />
        </Routes>
    </div>
  );
}

export default BookingForm;
