
import { Clock8, Earth, CalendarCheck, Laptop } from "lucide-react";

function TrackRecord1()
{
    return(
        <div role="TrackRecord1" className="max-w-[1400px] lg:h-[200px] h-[320px] p-4 mx-auto lg:mt-[70px] mt-0">
             <div className="lg:hidden block lg:mb-0 mb-4"> 
                 <button className=" w-full bg-black text-white rounded-full hover:bg-green-600 lg:p-0 p-4 m-2">
                    Get Started Now
                </button>
            </div>  
            <div className="grid lg:grid-cols-5 grid-cols-2 ">
                <button className="lg:block hidden bg-black text-white rounded-full hover:bg-green-600 lg:p-0 p-4 m-2">
                    Get Started Now
                </button>
                <div  className=" flex flex-col justify-center items-center">
                    <div role="TRgrid1Logo" className="my-2">
                      <Earth className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-colorFour" />
                    </div>
                    <div role="TRgrid1Text" className="my-2 w-full">
                      <h1 className="text-colorThree font-semibold w-full text-center">
                        Worldwide Access Availablity
                      </h1>
                    </div>
                  </div>

                  <div className=" flex flex-col justify-center items-center">
                    <div role="TRgrid2Logo" className="my-2">
                      <Clock8 className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-colorFour" />
                    </div>
                    <div role="TRgrid2Text" className="my-2 w-full">
                      <h1 className="text-colorThree font-semibold w-full text-center">
                        Scalable Timing Facility
                      </h1>
                    </div>
                  </div>

                  <div className=" flex flex-col justify-center items-center">
                    <div role="TRgrid3Logo" className="my-2">
                      <CalendarCheck className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-colorFour" />
                    </div>
                    <div role="TRgrid3Text" className="my-2 w-full">
                      <h1 className="text-colorThree font-semibold w-full text-center">
                        Simple Navigation Procedure
                      </h1>
                    </div>
                  </div>

                  <div className=" flex flex-col justify-center items-center">
                    <div role="TRgrid4Logo" className="my-2">
                      <Laptop className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-colorFour" />
                    </div>
                    <div role="TRgrid4Text" className="my-2 w-full">
                      <h1 className="text-colorThree font-semibold w-full text-center">
                        Complete Online Approach
                      </h1>
                    </div>
                  </div>
                </div>
                </div>
           
       
    )
}

export default TrackRecord1;