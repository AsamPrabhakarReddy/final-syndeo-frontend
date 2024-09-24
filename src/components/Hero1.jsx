import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import cdn from "../assets/cdn_logo.jpeg";

function Hero1() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [additionalNumber, setAdditionalNumber] = useState("");
  const [eventName, setEventName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

//   const calendarRef = useRef(null);

//   // Scroll to Hero1 when mouse moves up
//   useEffect(() => {
//       const handleMouseMove = (event) => {
//           if (event.clientY < 50) { // If mouse moves near the top
//               onScrollToHero1(); // Trigger scroll
//           }
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       return () => {
//           window.removeEventListener("mousemove", handleMouseMove);
//       };
//   }, [onScrollToHero1]);


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
      const response = await axios.post("http://localhost:9000/userDetails", rawData);
      console.log(response);
      setIsSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAdditionalNumber("");
      setEventName("");
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
    <div className=" rounded-lg pt-28  lg:h-[calc(100vh-80px)] h-[1200px] max-w-[1400px] lg:mx-auto mx-4">
      <div className="lg:grid grid-cols-2 gap-0">
        {/* Left side (text content) */}
        <div className="flex flex-col  gap-2 mb-5">
          <h1 className="font-extrabold lg:text-[75px] text-[60px] leading-tight text-left lg:py-[30px]">
            Scheduling<br />
            infrastructure<br />
            for <span className="text-blue-400 lg:text-[80px] text-[60px]">everyone.</span>
          </h1>
          <p className="mt-6 lg:text-[25px] text-[20px] leading-relaxed mb:5">
            Meet Syndeo.com, the event-juggling scheduler for <br />
            everyone. Focus on meeting, not making meetings. <br />
            Free for individuals.
          </p>
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
                  <div className="text-right mt-1 text-semibold">
                    <p>© 2024 Cloud Data Networks. All rights reserved.</p>
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
  );
}

export default Hero1;
