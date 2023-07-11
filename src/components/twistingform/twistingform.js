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
    addressName:'',
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
            <h2 className='twisting-h2'>When do you need Kevin?</h2>
            <label className='twisting-label'>Date:</label>
            <input
              type="date"
              name="date"
              className='form-control'
              value={formData.date}
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Time:</label>
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
            <h2 className='twisting-h2'>How long do you need Kevin?</h2>
            <label className='twisting-label'>Select number of hours:</label>
            <select
              name="duration"
              className='form-control twisting-select'
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
            <label className='twisting-label'>Event Type</label>
            <select
              name="eventType"
              className='form-control twisting-select'
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
          </div>
        );
      case 3:
        return (
          <div className='form-div'>
            <h2 className='twisting-h2'>Location of your Event</h2>
            <label className='twisting-label'>Event Address</label>
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
            <p></p>
            <p className='twisting-p or'>Or</p>
            <label className='twisting-label'>Location Name or Google Maps Link</label>
            <input
              type="text"
              name="addressName"
              className='form-control'
              value={formData.addressName}
              onChange={handleInputChange}
            />
           
          </div>
        );
      case 4:
        return (
          <div className='form-div'>
            <h2 className='twisting-h2'>Your Info</h2>
            <label className='twisting-label'>First Name</label>
            <input
              type="text"
              name="firstName"
              className='form-control'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Last Name</label>
            <input
              type="text"
              name="lastName"
              className='form-control'
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Email</label>
            <input
              type="text"
              name="email"
              className='form-control'
              value={formData.email}
              placeholder='iloveballoons18492@balloon.pop'
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Phone Number</label>
            <input
              type="text"
              name="phone"
              className='form-control'
              value={formData.phone}
              placeholder='555-555-5555'
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Instagram Handle</label>
            <input
              type="text"
              name="instagram"
              className='form-control'
              value={formData.instagram}
              placeholder='If you prefer Instagram messaging'
              onChange={handleInputChange}
            />
          </div>
        );
      case 5:
        return (
          <div className='form-div'>
            <h2 className='twisting-h2'>Add-ons</h2>
            <button >Open Modal</button>
            {/* <button onClick={openModal}>Open Modal</button> */}
          </div>
        );
      case 6:
        return (
          <div className='additional-info-div'>
            <h2 className='twisting-h2'>Additional Information</h2>
            <p className='twisting-p'>Not required, but useful for Kevin. Feel free to skip</p>
            
            <label className='twisting-label'>Location Type</label>
            <select
              name="eventSetting"
              className='form-control twisting-select'
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
            <label className='twisting-label'>Number of Guests</label>
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
                <label className='twisting-label'>Age Range</label>
            <input
              type="text"
              name="ageRange"
              className='form-control'
              value={formData.ageRange}
              placeholder='ex: 3-7'
              onChange={handleInputChange}
            />
            <label className='twisting-label'>Parking</label>
            <input
              type="text"
              name="parking"
              className='form-control'
              value={formData.parking}
              placeholder='Where can Kevin park?'
              onChange={handleInputChange}
            />
            <p></p>
            <input
              type="text"
              name="referal"
              className='form-control'
              value={formData.referal}
              placeholder="How did you hear about us?"
              onChange={handleInputChange}
            />
            <input
              type="textarea"
              name="additionalNotes"
              className='form-control'
              value={formData.additionalNotes}
              placeholder='Any additional notes?'
              onChange={handleInputChange}
            />

          </div>
        );
      case 7:
        return (
          <div>
            <label className='twisting-label'>Your Event *please check the info is correct before you submit*:</label>
           
            <p className='twisting-p'><span>Date:</span> {formData.date}</p>
            <p className='twisting-p'><span>Time:</span> {formData.time}</p>
            <p className='twisting-p'><span>How long:</span> {formData.duration}</p>
            <p className='twisting-p'><span>Location:</span> {formData.address} {formData.address2} {formData.addressName}</p>
            <p className='twisting-p'><span>Your Info:</span> {formData.firstName} {formData.lastName}</p>
            <p className='twisting-p'><span>Contact Info:</span> {formData.email}, {formData.phone}, {formData.instagram}</p>
            <p className='twisting-p'><span>Additional Info:</span> </p>
            <p className='twisting-p'><span>Event Type:</span> {formData.eventType}</p>
            <p className='twisting-p'><span>Event Setting:</span> {formData.eventSetting}</p>
            <p className='twisting-p'><span>Number of Guests:</span> {formData.numGuests}</p>
            <p className='twisting-p'><span>Age Range of Guests:</span> {formData.ageRange}</p>
            <p className='twisting-p'><span>Parking:</span> {formData.parking}</p>
            <p className='twisting-p'><span>Additional Notes:</span> {formData.additionalNotes}</p>
          </div>
      
        );
      default:
        return null;
    }
  };

  return (
    <div className='container'>
      <h2>Book Kevin's World-Famous Balloon Twisting for your Event!</h2>
      <div className="card-container">{renderCard(currentCard)}
      <div className="button-container">
        {currentCard > 1 && (
          <button className='form-nav-button'
          onClick={handlePreviousCard}>Previous</button>
        )}
        {currentCard < 7 ? (
          <button className='form-nav-button' onClick={handleNextCard}>Next</button>
        ) : (
        //   <button onClick={handleSubmit}>Submit</button>
          <button >Submit</button>
        )}
      </div>
      </div>
    </div>
  );
};

export default TwistingForm;
