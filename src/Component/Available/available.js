import React, { useState } from 'react';
import Head from '../Header/header';
import '../Allcss/index.css';
import { ReactComponent as BackIcon } from '../Images/icons/Leftsquare.svg';
import { ReactComponent as MininumIcon } from '../Images/icons/minimum.svg';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-bootstrap-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalendarIcon } from '../Images/icons/calendar.svg';
import { ReactComponent as BottomErrow } from '../Images/icons/errow.svg';
import 'react-datepicker/dist/react-datepicker.css';

const AvailablePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [slot1StartTime, setSlot1StartTime] = useState('09:00');
  const [slot1EndTime, setSlot1EndTime] = useState('10:00');
  const [slot2StartTime, setSlot2StartTime] = useState('10:00');
  const [slot2EndTime, setSlot2EndTime] = useState('11:00');

  // toggel button
  const [on, setOnState] = React.useState(true);
  const toggle = () => setOnState(o => !o);

  // time picker
  const handleStartTimeChange = (slot, newStartTime) => {
    if (slot === 1) {
      setSlot1StartTime(newStartTime);
    } else if (slot === 2) {
      setSlot2StartTime(newStartTime);
    }
  };

  const handleEndTimeChange = (slot, newEndTime) => {
    if (slot === 1) {
      setSlot1EndTime(newEndTime);
    } else if (slot === 2) {
      setSlot2EndTime(newEndTime);
    }
  };
  // date picker
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const CustomDatePickerInput = ({ selectedDate, onClick }) => (
    <div className="custom-datepicker-input" onClick={onClick}>
      {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
      <CalendarIcon />
    </div>
  );

  const TimePickerWithIcon = ({ value, onChange, className }) => {
    return (
      <div className="input-group">
        <TimePicker
          value={value}
          onChange={onChange}
          className={className}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <BottomErrow />
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head />
      <section>
        <div className="container mt-2">
          <button className="button">
            <BackIcon />
          </button>
          <div className="row justify-content-center card-full-div">
            <div className="row mt-4">
              <div className="success-card-2">
                {/* <MininumIcon /> */}
              </div>
              <div className="col-md-6">
                <div className="card bg-color-card">
                  <div className="card-body p-3">
                    <h2 className='price-heading-2 mt-2'>5-Min Power Call</h2>
                    <hr className='single-line-color-2' />
                    <p className='payment-para-2 mt-2'>Share your availability and we will schedule and manage your 5-min power calls</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <h2 className="second-heading-toggle">I am Available Now for the next</h2>
                <div className='d-flex justify-content-start align-items-end mt-1'>
                  <div className='d-flex align-items-end'>
                    <Form.Control type="number" placeholder="20" style={{ width: '60px', backgroundColor: 'rgba(249, 249, 249, 1)', textAlign: 'center' }} />
                    <h6 className='set-minutes'>Minutes</h6>
                  </div>
                  <button className={`toggle-btn ${on ? 'on' : 'off'}`} onClick={toggle} style={{ marginLeft: '10px' }}>
                    <span class="pin" />
                  </button>
                </div>
              </div>

              <div className='mt-3 d-flex justify-content-center align-items-center'>
                <hr className='single-line-color' style={{ flexGrow: 1 }} />
                <div style={{ margin: '0 10px', color:"rgba(131, 131, 131, 1)" }}>OR</div>
                <hr className='single-line-color' style={{ flexGrow: 1 }} />
              </div>

              <div className="col-md-6 mt-3">
                <h4 className="set-date">Please Select Date </h4>
                <div className='date-set'>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    customInput={<CustomDatePickerInput selectedDate={selectedDate} />}
                  />
                </div>
              </div>
              <div className="mt-3">
                <h4 className='set-date-name'>Slot 1 (E.g 4:00PM-4:30PM)</h4>
                <div className="d-flex mt-2">
                  <TimePickerWithIcon
                    value={slot1StartTime}
                    className="set-timepicker"
                    onChange={(value) => handleStartTimeChange(1, value)}
                  />
                  <span className="mx-2"></span>
                  <TimePickerWithIcon
                    value={slot1EndTime}
                    className="set-timepicker"
                    onChange={(value) => handleEndTimeChange(1, value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <h4 className='set-date-name'>Slot 2 (E.g 4:00PM-4:30PM)</h4>
                <div className="d-flex mt-2">
                  <TimePickerWithIcon
                    value={slot2StartTime}
                    className="set-timepicker"
                    onChange={(value) => handleStartTimeChange(2, value)}
                  />
                  <span className="mx-2"></span>
                  <TimePickerWithIcon
                    value={slot2EndTime}
                    className="set-timepicker"
                    onChange={(value) => handleEndTimeChange(2, value)}
                  />
                </div>
              </div>

              <div className='mt-2'>
                <hr className='single-line-color' />
              </div>
              <div>
                <h3 className='set-timeint'>Interval Between Calls (In Mins)</h3>
                <div className='d-flex align-items-end mt-2'>
                  <Form.Control type="number" placeholder="" style={{ width: '60px', backgroundColor: 'rgba(249, 249, 249, 1)', textAlign: 'center' }} />
                </div>
              </div>
              <div class="d-grid gap-2 mt-4 mb-5">
                <button class="accept-button-2" type="button">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailablePage;
