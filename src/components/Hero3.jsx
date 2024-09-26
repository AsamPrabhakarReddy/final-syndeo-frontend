import Gird1 from "../assets/grid1.png";
function Hero3() {
  return (
    <div className="max-w-[1400px] h-auto lg:mx-auto mx-2">
      <div className="p-4 flex flex-col gap-5">
        <div className="text-extrabold lg:text-[70px] text-[50px] font-bold text-center">
          <h1>Everything you need in a scheduling app</h1>
        </div>
        <div className="lg:grid grid-cols-6 border-l-[15px] border-r-2 border-y-2 border-black rounded-lg gap-4 bg-gray-300">
            <div className="text-4xl font-bold rounded-full bg-gray-800 text-white w-[60px] h-[60px] flex items-center justify-center m-8 p-4">
                01
            </div>

        
          <div className="col-span-5 w-full h-full p-3 ">
            <img className="rounded-lg" src={Gird1} alt="Grid 1" />
          </div>
          <div className="lg:col-span-6 font-bold text-2xl">
           <p className="lg:block md:hidden hidden"> --------------------------------------------------------------------------------------------------------------------------------------</p>
           <p className="lg:hidden md:hidden lg:mx-0 mx-auto">-----------------------------------------------</p>
          </div>
          <div className="col-span-3 p-[10px] "> {/* Fixed className */}
            <h1 className="text-3xl font-bold">A tailored link ready for every scenario</h1>
          </div>
          <div className="col-span-3  lg:ml-[200px] items-center text-2xl  p-[20px] mb-[10px]">
            <p>Set availability, location, duration <br/>
             and more on a per-link basis. Send <br/>
              bookings to different calendars or <br/>
              set a default.</p>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Hero3;
