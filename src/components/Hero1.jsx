import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import cdn from "../assets/cdn_logo.jpeg";

function Hero1({ onOpenModal, onCloseModal }) {
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
      setIsSubmitted(true);
      // Reset fields and close modal
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAdditionalNumber("");
      setEventName("");
      setSelectedDate(null);
      setShowModal(false);
      onCloseModal(); // Close modal in parent (App)
        setIsSubmitted(true)
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
    onOpenModal(); // Open modal in parent (App)
  };

  const closeModal = () => {
    setShowModal(false);
    onCloseModal(); // Close modal in parent (App)
  };

  return (
    <div role="Hero1" className="rounded-lg pt-28  lg:h-[calc(100vh-80px)] h-[1200px] max-w-[1400px] lg:mx-auto mx-4">
      <div className="lg:grid grid-cols-2 gap-0">
        <div className="flex flex-col gap-2 mb-5">
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

        <div className="w-full h-full">
          <div className={`mx-auto w-full h-full rounded-lg ${showModal ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              height="auto"
              selectable={true}
              headerToolbar={{
                start: "prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              dateClick={handleDateClick}
              className="w-full lg:h-[100%] h-auto"
            />
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mx-4">
                <div className="flex gap-[20px]">
                  <img className="w-[50px] h-[50px]" src={cdn} alt="Logo" />
                  <h1 className="text-center text-3xl font-bold">Add Event Details</h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" required />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="tel" value={additionalNumber} onChange={(e) => setAdditionalNumber(e.target.value)} placeholder="Enter Additional Number" />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none" type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter Event Name" required />
                  <input className="p-2 rounded-lg bg-gray-300 outline-none font-bold" type="text" placeholder="Selected Date" value={`Selected Date: ${selectedDate}`} readOnly />
                  <div className="flex gap-[30px] justify-center mt-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" type="button" onClick={closeModal}>
                      Close
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">
                      Submit
                    </button>
                  </div>
                  <div className="text-right mt-1 text-semibold">
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
      </div>
    </div>
  );
}

export default Hero1;
