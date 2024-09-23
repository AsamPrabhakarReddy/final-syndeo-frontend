import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalNumber, setAdditionalNumber] = useState('');
  const [eventName, setEventName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [error, setError]=useState(null)
  const[isError, setIsError]=useState(false)
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      additionalNumber,
      eventName,
      selectedDate,
    };
  
    try {
      const response = await axios.post('http://localhost:9000/userDetails', rawData);
      console.log(response);
  
      // Set submission status to true
      setIsSubmitted(true);
  
      // Reset form fields after submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setAdditionalNumber('');
      setEventName('');
      setSelectedDate(null);
  
      // Close modal after submission
      setShowModal(false);
  
      // Remove the success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Adjust the time as needed (e.g., 3000 = 3 seconds)
  
    } catch (error) {
      // Extract a user-friendly error message
      const errorMessage = error.response?.data?.message || error.message || "An error occurred. Please try again.";
  
      // Set the extracted message to the error state
      setError(errorMessage);
      setIsError(true);
  
      // Remove the error message after a few seconds
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };
  
  // Handle date click in calendar
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <div className="h-screen">
      {/* <div className="w-full bg-white shadow-xl">
        <h1 className="max-w-[1400px] text-center text-2xl h-[75px] items-center font-bold p-5 mx-auto">
          Importing Calendar
        </h1>
      </div> */}
      <div
        className={`max-w-[1400px] mx-auto h-[calc(100vh-75px)] mt-4 mb-10 ${
          showModal ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="100%"
          selectable={true}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          dateClick={handleDateClick}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center mt-[10px]">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h1 className="text-center text-3xl font-bold">Add Event Details</h1>
            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2">
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                required
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                required
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter Event Name"
                required
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone Number"
                required
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none"
                type="tel"
                value={additionalNumber}
                onChange={(e) => setAdditionalNumber(e.target.value)}
                placeholder="Enter Additional Number"
              />
              <input
                className="p-3 rounded-lg bg-gray-300 outline-none font-bold"
                type="text"
                placeholder="Selected Date"
                value={`Selected Date: ${selectedDate}`}
                readOnly
              />
              <div className="flex gap-[50px] mx-auto mt-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="text-right">
                  <p>Copyright © 2024 Syndèo. All rights reserved.</p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success message */}
      {isSubmitted && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md">
          Data sent successfully!
        </div>
      )}

      {/* Error message */}
      {isError && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded shadow-md">
          {error}
        </div>
      )}
    </div>
  );
}

export default Calendar;
