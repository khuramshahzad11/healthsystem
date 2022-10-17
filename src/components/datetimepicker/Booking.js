import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import "./booking.css"

import "./booking.css";
import { FaStar, FaRegCalendarAlt } from "react-icons/fa";
const Booking = () => {
  const [datetime, setDateTime] = useState(new Date());
  console.log(datetime)
  const todayDate = () => {
    new Date()
  }
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-content-center">
              <Popup className="custom-popup" trigger={  <a
                  className="btn btn-primary submit-btn"
                  // href="/template-psychiatrist/patient/checkout"
                >
                  Proceed to Pay
                </a>} position="left center">
              <div>    <DateTimePicker
                  onChange={(date) => setDateTime(date)}
                  value={datetime}
                  placeholderText="Please Pick Date"
                  format="y-MM-dd h a"
                  minDate={new Date()}
                  min={new Date ("10/17/2022 10:00 AM")}
                  max={new Date ("10/21/2021 05:00 PM")}
                  hourAriaLabel="Hour"
                  
                /></div>
             </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
