import gird2 from "../assets/grid2.png";
import logo from "../assets/cdn_logo.jpeg"
import gLogo from "../assets/google_logo.png"
import iLogo from "../assets/iphone_logo.png"
import oLogo from "../assets/outlook_logo.jpeg"
import { FaArrowRight } from "react-icons/fa";
import { GiVibratingSmartphone } from "react-icons/gi";
import "../../src/App.css"
function Hero4()
{
    return(
        <div className="max-w-[1400px] lg:mx-auto mx-2">
           <div className="lg:grid grid-cols-2 lg:gap-6  p-4">
                {/* // Grid 1 */}
                <div className="lg:grid grid-cols-5 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300 lg:mb-0 mb-5">
                    <div className="text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                        02
                    </div>
                    <div className="col-span-3 w-full h-full p-3 flex items-end">
                        <img className="rounded-lg" src={gird2} alt="Grid 1" />
                    </div>
                    <div className="col-span-5 w-full h-full pb-[80px] overflow-hidden">
                            <div className="w-full flex gap-8 animate-scroll">
                                <div className="flex-none w-[330px] h-[200px] shadow-xl bg-white gap-2 rounded-lg">
                                    <div className="flex gap-4 items-center m-4">
                                        <img className="w-[40px] h-[40px]" src={gLogo} />
                                        <div className="flex flex-col">
                                            <h1 className="font-semibold text-xl">Google Calendar</h1>
                                            <p>mockuser@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 ml-4">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Get Rickrolled at work</p>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Events at home</p>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Holidays in Canada</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-none w-[330px] h-[200px] shadow-xl bg-white gap-2 rounded-lg">
                                    <div className="flex gap-4 items-center m-4">
                                        <img className="w-[40px] h-[40px]" src={iLogo} />
                                        <div className="flex flex-col">
                                            <h1 className="font-semibold text-xl">Apple Calendar</h1>
                                            <p>mockuser1@icloud.com</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 ml-4">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Get Rickrolled at work</p>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Events at home</p>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-2xl"><FaArrowRight /></span>
                                            <p className="text-xl">Holidays in Canada</p>
                                        </div>
                                    </div>
                                </div>

                            <div className="flex-none w-[330px] h-[200px] shadow-xl bg-white gap-2 rounded-lg">
                                <div className="flex gap-4 items-center m-4">
                                    <img className="w-[40px] h-[40px]" src={oLogo} />
                                    <div className="flex flex-col">
                                        <h1 className="font-semibold text-xl">Outlook Calendar</h1>
                                        <p>mockuser@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 ml-4">
                                    <div className="flex gap-4 items-center">
                                        <span className="text-2xl"><FaArrowRight /></span>
                                        <p className="text-xl">Get Rickrolled at work</p>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <span className="text-2xl"><FaArrowRight /></span>
                                        <p className="text-xl">Events at home</p>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <span className="text-2xl"><FaArrowRight /></span>
                                        <p className="text-xl">Holidays in Canada</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="lg:col-span-5 font-bold text-2xl">
                        <p className="lg:block hidden"> -----------------------------------------------------------------</p>
                        <p className="lg:hidden ">-----------------------------------------------</p>
                    </div>
                    <div className="col-span-2 p-[5px] ml-3 "> {/* Fixed className */}
                        <h1 className="text-3xl font-bold">Connect all <br/> your calendars</h1>
                    </div>
                    <div className="col-span-3  items-center text-xl lg:ml-0 ml-4  mb-[50px] ">
                        <p>Syndeo.com checks for conflicts across all  <br/>
                        of your calendars and only offers times that <br/>
                        are open. Never get double booked again. <br/></p>
                    </div>
                </div>
                {/* //Grid2 */}
                <div className="lg:grid grid-cols-5 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300">
                    <div className="text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                        03
                    </div>
                    <div className="col-span-4 w-full h-full p-3 pb-[130px]">
                    <div class="relative overflow-hidden h-[300px]">
                                <div class="animate-circular-vertical-scroll flex flex-col  gap-5">
                                
                                    <div class="w-[400px] h-[100px] shadow-xl bg-white flex items-center rounded-lg">
                                    <div class="flex items-center m-4 gap-5">
                                        <span class="text-5xl font-bold"><GiVibratingSmartphone /></span>
                                        <p class="text-[18px] text-gray-800 font-semibold">Send SMS reminder 1 hour before event starts to attendees</p>
                                    </div>
                                    </div>

                                
                                    <div class="w-[400px] h-[100px] shadow-xl bg-white flex items-center rounded-lg">
                                    <div class="flex items-center m-4 gap-5">
                                        <span class="text-5xl font-bold"><GiVibratingSmartphone /></span>
                                        <p class="text-[18px] text-gray-800 font-semibold">Send SMS reminder 24 hours before event starts to Host</p>
                                    </div>
                                    </div>

                                
                                    <div class="w-[400px] h-[100px] shadow-xl bg-white flex items-center rounded-lg">
                                        <div class="flex items-center m-4 gap-5">
                                            <span class="text-5xl font-bold"><GiVibratingSmartphone /></span>
                                            <p class="text-[18px] text-gray-800 font-semibold">Send custom email when event is cancelled</p>
                                        </div>
                                    </div>

                                    <div class="w-[400px] h-[100px] shadow-xl bg-white flex items-center rounded-lg">
                                        <div class="flex items-center m-4 gap-5">
                                            <span class="text-5xl font-bold"><GiVibratingSmartphone /></span>
                                            <p class="text-[18px] text-gray-800 font-semibold">Send SMS reminder 24 hours before event starts to Host</p>
                                        </div>
                                    </div>
                                    <div class="w-[400px] h-[100px] shadow-xl bg-white flex items-center rounded-lg">
                                        <div class="flex items-center m-4 gap-5">
                                            <span class="text-5xl font-bold"><GiVibratingSmartphone /></span>
                                            <p class="text-[18px] text-gray-800 font-semibold">Send SMS reminder 1 hour before event starts to attendees</p>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            </div>
                    
                    <div className="lg:col-span-5 font-bold text-2xl">
                        <p className="lg:block hidden"> -----------------------------------------------------------------</p>
                        <p className="lg:hidden ">-----------------------------------------------</p>
                    </div>
                   
                    <div className="col-span-2 p-[5px] ml-3 "> {/* Fixed className */}
                        <h1 className="text-3xl font-bold">Workflow <br/>automation</h1>
                    </div>
                    <div className="col-span-3  items-center text-xl lg:ml-0 ml-4  mb-[50px] ">
                        <p>Syndeo.com enables you to build processes <br/>
                            around your events. Notifications, <br/> 
                            reminders and follow ups are automatically <br/>
                             taken care of.</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Hero4;