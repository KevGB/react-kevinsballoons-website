import React, { useState } from 'react';
import "./twistingform.css"

const TwistingForm = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '',
    address: '',
    address2: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '',
    eventType: '',
    eventSetting: '',
    numGuests: 0,
    ageRange: '',
    parking: '',
    referal: '',
    additionalNotes: '',
  
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) => prevCard + 1);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) => prevCard - 1);
  };

  const renderCard = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        return (
          <div className='form-div'>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              className='form-control'
              value={formData.date}
              onChange={handleInputChange}
            />
             <input
              type="time"
              name="time"
              className='form-control'
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
        );
      case 2:
        return (
          <div  className='form-div'>
            <label>How long do you need Balloon Twisting?:</label>
            <select
              name="duration"
              className='form-control'
              value={formData.duration}
              onChange={handleInputChange}
            >
              <option value="">-- Select an option --</option>
              <option value="1 hr">1 hr</option>
              <option value="1.5 hr">1.5 hr</option>
              <option value="2 hr">2 hr</option>
              <option value="2.5 hr">2.5 hr</option>
              <option value="3 hr">3 hr</option>
              <option value="3.5 hr">3.5 hr</option>
              <option value="4 hr">4 hr</option>
              <option value="4.5 hr">4.5 hr</option>
              <option value="5 hr">5 hr</option>
              <option value="5.5 hr">5.5 hr</option>
              <option value="6 hr">6 hr</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div className='form-div'>
            <label>Event Address:</label>
            <input
              type="text"
              name="address"
              className='form-control'
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address2"
              className='form-control'
              value={formData.address2}
              onChange={handleInputChange}
            />
          </div>
        );
      case 4:
        return (
          <div className='form-div'>
            <label>Your Info:</label>
            <input
              type="text"
              name="firstName"
              className='form-control'
              value={formData.firstName}
              placeholder='Your first name'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              className='form-control'
              value={formData.lastName}
              placeholder='Your last name'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              className='form-control'
              value={formData.email}
              placeholder='Your email'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              className='form-control'
              value={formData.phone}
              placeholder='Your phone number'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="instagram"
              className='form-control'
              value={formData.instagram}
              placeholder='If you prefer Instagram messaging, your IG handle'
              onChange={handleInputChange}
            />
          </div>
        );
      case 5:
        return (
          <div className='form-div'>
            <button >Open Modal</button>
            {/* <button onClick={openModal}>Open Modal</button> */}
          </div>
        );
      case 6:
        return (
          <div className='additional-info-div'>
            <label>Additional Information *not required, but helpful for me*:</label>
            <select
              name="eventType"
              className='form-control'
              value={formData.eventType}
              onChange={handleInputChange}
            >
              <option value="">-- What kind of event is this? --</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Birthday">Birthday Party</option>
              <option value="Wedding">Wedding</option>
              <option value="Holiday">Holiday Event</option>
              <option value="Bachelorette/Bachelor Party">Bachelorette/Bachelor Party</option>
              <option value="Graduation Party">Graduation</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Festival">Festival</option>
              <option value="Carnival">Carnival</option>
              
            </select>
            <select
              name="eventSetting"
              className='form-control'
              value={formData.eventSetting}
              onChange={handleInputChange}
            >
              <option value="">-- What's the location? --</option>
              <option value="Spark/Parklab">Spark Social SF/Parklab Garden</option>
              <option value="Even Venue">Event Venue</option>
              <option value="Festival Grounds">Festival Grounds</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Park">Public Park</option>
              <option value="Backyard">Backyard</option>
              <option value="Pool">Pool</option>
              <option value="School">School</option>
              <option value="Daycare">Daycare</option>
              
            </select>
            <div style={{ display: "flex", justifyContent: "center" }}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    id="numGuests"
                    value={formData.numGuests}
                    name="numGuests"
                    className="field"
                    onChange={handleInputChange}
                    style={{ width: "300px" }}
                  />{" "}
                  <span className="range-display">
                    {formData.numGuests}
                  </span>
                </div>
            <input
              type="text"
              name="ageRange"
              className='form-control'
              value={formData.ageRange}
              placeholder='Age Range? ex: 3-7'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="parking"
              className='form-control'
              value={formData.parking}
              placeholder='Where can Kevin park?'
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="referal"
              className='form-control'
              value={formData.referal}
              placeholder="How did you hear about Kevin's Balloons?"
              onChange={handleInputChange}
            />
            <input
              type="textarea"
              name="additionalNotes"
              className='form-control'
              value={formData.additionalNotes}
              placeholder='Any additional notes about your event?'
              onChange={handleInputChange}
            />

          </div>
        );
      case 7:
        return (
          <div>
            <h3>Your Event *please check the info is correct before you submit*:</h3>
            <p><span>Date:</span> {formData.date}</p>
            <p><span>Time:</span> {formData.time}</p>
            <p><span>How long:</span> {formData.duration}</p>
            <p><span>Location:</span> {formData.address} {formData.address2}</p>
            <p><span>Your Info:</span> {formData.firstName} {formData.lastName}</p>
            <p><span>Contact Info:</span> {formData.email}, {formData.phone}, {formData.instagram}</p>
            <p><span>Additional Info:</span> </p>
            <p><span>Event Type:</span> {formData.eventType}</p>
            <p><span>Event Setting:</span> {formData.eventSetting}</p>
            <p><span>Number of Guests:</span> {formData.numGuests}</p>
            <p><span>Age Range of Guests:</span> {formData.ageRange}</p>
            <p><span>Parking:</span> {formData.parking}</p>
            <p><span>Additional Notes:</span> {formData.additionalNotes}</p>
          </div>
      
        );
      default:
        return null;
    }
  };

  return (
    <div className='container'>
      <h2>Book Balloon Twisting for your Event!</h2>
      <div className="card-container">{renderCard(currentCard)}</div>
      <div className="button-container">
        {currentCard > 1 && (
          <button onClick={handlePreviousCard}>Previous</button>
        )}
        {currentCard < 7 ? (
          <button onClick={handleNextCard}>Next</button>
        ) : (
        //   <button onClick={handleSubmit}>Submit</button>
          <button >Submit</button>
        )}
      </div>
    </div>
  );
};

export default TwistingForm;
