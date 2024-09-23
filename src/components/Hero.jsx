// import Lottie from "lottie-react";
// import HeaderLottie from "../assets/lotties/Header.json";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import cdn from "../assets/cdn_logo.jpeg";



const Hero = () => {
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
    <div className=" p-8 bg-gray-600 rounded-lg pt-28  lg:h-[calc(100vh-50px)] h-[1380px] max-w-[1400px] lg:mx-auto mx-4">
      <div className="md:grid grid-cols-2 p-4">
                <div className="flex flex-col gap-8 w-full">
                        <div className=" flex items-center lg:justify-start justify-center mt-4 mx-3">
                            <h1 className="text-white xl:text-6xl text-[48px] font-bold lg:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-colorFive">
                            Find & Book your dream
                            <span className=""> appointment with us</span>
                            </h1>
                        </div>

                        <div  className="flex items-center lg:justify-start justify-center mx-3 text-white ">
                            <h1 className=" lg:text-[30px] text-[24px] font-semibold lg:px-2 lg:text-start text-center">
                            Want to know how this happens ?
                            </h1>
                        </div>

                        <div className="flex items-center lg:justify-start justify-center mx-3  ">
                            <p className="lg:text-lg text-[16px] text-white lg:px-2 lg:text-start text-center">
                            But you might feel a bit lost on how to get started. So, Syndèo
                            does the hard work for you! Everything you need to know is on one
                            platform. You will receive guidance throughout the whole
                            application process-all completely free.
                            </p>
                        </div>

                        <div className="flex items-center lg:justify-start justify-center md:mx-5 text-white ">
                            <a
                            href="/login"
                            className="bg-blue-600 hover:bg-[#14a800] font-semibold outline-none
                            rounded-3xl hover:shadow-form transition duration-1000 ease-in-out text-white px-8 py-2.5 text-center"
                            >
                            Get Started Now
                            </a>
                        </div>
                </div>


                <div className="h-screen">
                   
                    <div
                        className={`max-w-[1400px] mx-auto h-[calc(100vh-75px)] mt-4 mb-2 text-white rounded-lg ${
                        showModal ? "opacity-50 pointer-events-none" : "opacity-100"
                        }`}
                    >
                        <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        height="80%"
                        selectable={true}
                        headerToolbar={{
                            start: "prev,next",
                            center: "title",
                            end: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        dateClick={handleDateClick}
                        className="w-full text-white"
                        />
                    </div>

                    {showModal && (
                       <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex justify-center items-center p-4 style={{ top: '80px'}}">
                       <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mx-4 relative">
                         <div className="flex items-center gap-10 mb-4">
                           <img className="w-12 h-12" src={cdn} alt="Logo" />
                           <h1 className="text-3xl font-bold text-black">Add Event Details</h1>
                         </div>
                     
                         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="text"
                             value={firstName}
                             onChange={(e) => setFirstName(e.target.value)}
                             placeholder="Enter First Name"
                             required
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="text"
                             value={lastName}
                             onChange={(e) => setLastName(e.target.value)}
                             placeholder="Enter Last Name"
                             required
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             placeholder="Enter Email"
                             required
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="text"
                             value={eventName}
                             onChange={(e) => setEventName(e.target.value)}
                             placeholder="Enter Event Name"
                             required
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="tel"
                             value={phoneNumber}
                             onChange={(e) => setPhoneNumber(e.target.value)}
                             placeholder="Enter Phone Number"
                             required
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-100 border focus:border-blue-500 outline-none"
                             type="tel"
                             value={additionalNumber}
                             onChange={(e) => setAdditionalNumber(e.target.value)}
                             placeholder="Enter Additional Number"
                           />
                           <input
                             className="p-3 rounded-lg bg-gray-200 font-bold text-center"
                             type="text"
                             placeholder="Selected Date"
                             value={`Selected Date: ${selectedDate}`}
                             readOnly
                           />
                     
                           <div className="flex justify-between mt-4">
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
                     
                           <div className="text-right mt-2 text-md text-semibold ">
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
};

export default Hero;
