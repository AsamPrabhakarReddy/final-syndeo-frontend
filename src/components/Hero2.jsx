import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import cdn from "../assets/cdn_logo.jpeg";


function Hero2()
{
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [additionalNumber, setAdditionalNumber] = useState('');
    const [eventName, setEventName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
  
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
        setIsSubmitted(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setAdditionalNumber('');
        setEventName('');
        setSelectedDate(null);
        setShowModal(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "An error occurred. Please try again.";
        setError(errorMessage);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 5000);
      }
    };
  
    const handleDateClick = (info) => {
      setSelectedDate(info.dateStr);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedDate(null);
    };

    
    return (
        <div className="max-w-[1400px] lg:h-[650px] h-[1150px] rounded-lg p-4 bg-gray-600 lg:mx-auto mx-4 mb-2">
            <div className="lg:grid grid-cols-2">
                <div className="flex flex-col gap-8 justify-center w-full mb-4">
                    <div className="flex items-center lg:justify-start justify-center mt-4 mx-3">
                        <h1 className="text-white xl:text-6xl lg:text-[48px] text-[36px] font-bold lg:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-colorFive">
                            Find & Book your dream
                            <span className=""> appointment with us</span>
                        </h1>
                    </div>
                    <div className="flex items-center lg:justify-start justify-center mx-3 text-white">
                        <h1 className="lg:text-[30px] text-[24px] font-semibold lg:px-2 lg:text-start text-center ">
                            Want to know how this happens?
                        </h1>
                    </div>
                    <div className="flex items-center lg:justify-start justify-center mx-3">
                        <p className="lg:text-lg text-[16px] text-white lg:px-2 lg:text-start text-center">
                            But you might feel a bit lost on how to get started. So, Syndèo
                            does the hard work for you! Everything you need to know is on one
                            platform. You will receive guidance throughout the whole
                            application process—all completely free.
                        </p>
                    </div>
                    <div className="flex items-center lg:justify-start justify-center md:mx-5 text-white">
                        <a
                            href="/login"
                            className="bg-blue-600 hover:bg-[#14a800] font-semibold outline-none rounded-3xl hover:shadow-form transition duration-1000 ease-in-out text-white px-8 py-2.5 text-center"
                        >
                            Get Started Now
                        </a>
                    </div>
                </div>

                 {/* Right side (calendar) */}
        <div className="w-full h-full " >
          <div className={`mx-auto w-full h-full rounded-lg ${showModal ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
          <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="auto" // Sets the height to auto based on content
                selectable={true}
                headerToolbar={{
                    start: "prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                dateClick={handleDateClick}
                className="w-full lg:h-[100%] h-auto" // Apply Tailwind classes for responsive height
                />

          </div>

          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mx-4">
                <div className="flex gap-[20px]">
                  <img className="w-[50px] h-[50px]" src={cdn} alt="Logo" />
                  <h1 className="text-center text-3xl font-bold">Add Event Details</h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    required
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    required
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter Event Name"
                    required
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Phone Number"
                    required
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none"
                    type="tel"
                    value={additionalNumber}
                    onChange={(e) => setAdditionalNumber(e.target.value)}
                    placeholder="Enter Additional Number"
                  />
                  <input
                    className="p-2 rounded-lg bg-gray-300 outline-none font-bold"
                    type="text"
                    placeholder="Selected Date"
                    value={`Selected Date: ${selectedDate}`}
                    readOnly
                  />
                  <div className="flex gap-[30px] justify-center mt-2">
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
                  <div className="text-right mt-1 text-semibold text-gray-800">
                    <p> © 2024 Cloud Data Networks. All rights reserved.</p>
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
      </div>
            </div>


    )};

export default Hero2;
