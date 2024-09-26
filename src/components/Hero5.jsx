import grid1 from "../assets/grid31.png"
import grid2 from "../assets/grid32.png"
import grid3 from "../assets/grid33.png"

function Hero5()
{
    return(
        <div className="max-w-[1400px] lg:mx-auto mx-2">
            <div className="lg:grid grid-cols-3 gap-4 p-4">

                <div className="lg:grid grid-cols-6 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300 lg:mb-0 mb-5">
                    <div className="col-span-2 text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                        04
                    </div>
                    <div className="col-span-4 w-full h-full p-3 ">
                        <img className="rounded-xl" src={grid1} alt="Grid 1" />
                    </div>
                    <div className="lg:col-span-6 font-bold text-2xl">
                        <p className="lg:block hidden"> ------------------------------------------</p>
                        <p className="lg:hidden "> -----------------------------------------------</p>
                    </div>
                    <div className="col-span-6 p-[5px] text-center "> {/* Fixed className */}
                        <h1 className="text-[30px] font-bold">Scheduling for your teams</h1>
                    </div>
                    <div className="col-span-6  items-center text-xl   mb-[50px] text-center mx-4">
                        <p>Round-Robin scheduling ensures even distribution of calls across your team. Collective availability makes it easy to book your team when everyone is available.</p>
                    </div>
                </div>

                <div className="lg:grid grid-cols-6 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300 lg:mb-0 mb-5">
                    <div className="col-span-2 text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                        05
                    </div>
                    <div className="col-span-4 w-full h-full p-3 ">
                        <img className="rounded-xl h-[192px]" src={grid2} alt="Grid 1" />
                    </div>
                    <div className="lg:col-span-6 font-bold text-2xl">
                        <p className="lg:block hidden"> ------------------------------------------</p>
                        <p className="lg:hidden "> -----------------------------------------------</p>
                    </div>
                    <div className="col-span-6 p-[5px] text-center "> {/* Fixed className */}
                        <h1 className="text-[30px] font-bold">Route bookers to the right person</h1>
                    </div>
                    <div className="col-span-6  items-center text-xl   mb-[50px] text-center mx-4">
                        <p>Ensure every booker is connected to the right person with Routing Forms. Ask screening questions and automatically connect bookers to the right person, event or even to a link.</p>
                    </div>
                </div>

                <div className="lg:grid grid-cols-6 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300">
                    <div className="col-span-2 text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                        06
                    </div>
                    <div className="col-span-4 w-full h-full p-3 ">
                        <img className="rounded-xl" src={grid3} alt="Grid 1" />
                    </div>
                    <div className="lg:col-span-6 font-bold text-2xl">
                        <p className="lg:block hidden"> ------------------------------------------</p>
                        <p className="lg:hidden "> -----------------------------------------------</p>
                    </div>
                    <div className="col-span-6 p-[5px] text-center "> {/* Fixed className */}
                        <h1 className="text-[30px] font-bold">Avoid meeting overload</h1>
                    </div>
                    <div className="col-span-6  items-center text-xl   mb-[50px] text-center mx-4">
                        <p>Limit people from overbooking you on a weekly or daily basis. Put breathing room between meetings with buffers either side and prevent surprises with minimum notice periods.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero5;