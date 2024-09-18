import left from "../assets/left.svg";
import right from "../assets/right.svg";
import Lottie from "lottie-react";
import AboutOne from "../assets/lotties/AboutOne.json";
import AboutTwo from "../assets/lotties/TwoLottie.json";
import AboutThree from "../assets/lotties/AboutThree.json";

const FeaturesOne = () => {
  return (
    <div role="aboutOne" className="bg-white">
      <div className="relative pt-40 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <img src={left} alt="" width={27} height={52}></img>
                    <h1 className="text-4xl font-bold tracking-normal text-colorThree dark:text-black mx-1">
                      {" "}
                      About Syndèo
                    </h1>
                    <img src={right} alt="" width={27} height={52}></img>
                  </div>
                  <div className="w-28 h-1 border-b-4 border-colorFour mt-1"></div>
                </div>

                <div className="text-gray-600 dark:text-gray-800 my-4">
                  <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                    Syndèo allows you to highlight your free periods and share
                    the details with another person within an organization, who
                    can then choose a suitable time to meet you. You’ll both
                    receive reminders and links to meetings, making operations
                    such as recruitment and customer support easy.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
                  <div className="">
                    <div className="rounded-xl  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-88">
                      <div className="flex flex-col justify-center items-center">
                        <div role="lottie1" className="my-4">
                          <Lottie
                            
                            animationData={AboutOne}
                            loop={true}
                            className="w-[310px] h-[200px]"
                          />
                        </div>
                        <div className="my-2">
                          <h1 className="font-bold text-[20px] tracking-wide text-colorThree">
                            Better Workflow Management
                          </h1>
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="text-[16px] leading-relaxed tracking-wide mx-2 text-gray-900">
                            Explore the range of features that make Syndéo the
                            best online booking and management system for
                            businesses of any size and industry. We offer custom
                            features to help you attract new clients, nurture
                            your current ones and manage your business like a
                            pro!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col h-88">
                      <div className="flex flex-col justify-center items-center">
                        <div role="lottie2" className="my-4">
                          <Lottie
                            
                            animationData={AboutTwo}
                            loop={true}
                            className="w-[310px] h-[200px]"
                          />
                        </div>
                        <div className="my-2">
                          <h1 className="font-bold text-[20px] tracking-wide text-colorThree">
                            Embedded Scheduling and Routing
                          </h1>
                        </div>
                        <div className="mt-2 mb-4 h-auto ">
                          <p className="text-[16px] leading-relaxed tracking-wide mx-2 text-gray-900">
                            Explore the range of features that make Syndéo the
                            best online booking and management system for
                            businesses of any size and industry. We offer custom
                            features to help you attract new clients, nurture
                            your current ones and manage your business like a
                            pro!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col h-88">
                      <div className="flex flex-col justify-center items-center">
                        <div role="lottie3" className="my-4">
                          <Lottie
                            
                            animationData={AboutThree}
                            loop={true}
                            className="w-[310px] h-[200px]"
                          />
                        </div>
                        <div className="my-2">
                          <h1 className="font-bold text-[20px] tracking-wide text-colorThree">
                            Superior Security & Compliance
                          </h1>
                        </div>
                        <div className="mt-2 mb-4 h-auto">
                          <p className="text-[16px] leading-relaxed tracking-wide mx-2 text-gray-900">
                            Explore the range of features that make Syndéo the
                            best online booking and management system for
                            businesses of any size and industry. We offer custom
                            features to help you attract new clients, nurture
                            your current ones and manage your business like a
                            pro!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOne;
