import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {

    const [selectedDate, setSelectedDate] = useState(null)
    const [showModel, setShowModel] = useState(false)

    const handleDateClick = (info)=>{
        setSelectedDate(info.dateStr)
        setShowModel(true)
    }; 

    const closeModal = ()=>{
        setShowModel(false)
        setSelectedDate(null)
    }
  return (
    <div className="h-screen"> 
      <div className="w-full bg-white shadow-xl sticky fixed ">
        <h1 className="max-w-[1400px] text-center text-2xl h-[75px] items-center font-bold p-5 mx-auto">
          Importing Calendar
        </h1>
      </div>
      <div  className={`max-w-[1400px] mx-auto h-[calc(100vh-75px)] mt-4 mb-10 ${
          showModel ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}>
        
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

      {
        showModel && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                    <h2 className="text-2xl mb-4">Date Clicked</h2>
                    <p>You clicked on: {selectedDate}</p>
                    <div className="flex justify-end mt-6">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                    </div>
                </div>
            </div>
        )
      }
    </div>
  );
}

export default Calendar;

