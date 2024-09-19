import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  return (
    <div className="h-screen"> 
      {/* <div className="w-full bg-white shadow-xl sticky fixed ">
        <h1 className="max-w-[1400px] text-center text-2xl h-[75px] items-center font-bold p-5 mx-auto">
          Importing Calendar
        </h1>
      </div> */}
      <div className="max-w-[1400px] mx-auto h-[calc(100vh-75px)] mt-4 mb-10">
        
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="100%" 
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;