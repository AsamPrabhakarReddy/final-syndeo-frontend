const Final = () => {
  return (
    <div role="final" className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex flex-col space-y-4 mt-8">
                  <div>
                    <h1 className="uppercase font-bold text-colorFour tracking-wide">
                      get in touch
                    </h1>
                  </div>
                  <div>
                    <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                      Motivated to make a better future, connect to us through
                      this form.
                    </h1>
                  </div>
                  <div>
                    <h1 className="leading-relaxed tracking-wide font-medium lg:text-[20px] text-[16px] text-gray-600 dark:text-gray-800 ">
                      We craft beautiful and unique digital experiences. With a
                      better industy knowledge and expertise, we design and code
                      clean websites and apps!
                    </h1>
                  </div>
                  <div>
                    <ul className="space-y-4 text-colorTwo font-semibold leading-relaxed tracking-wide flex flex-col list-disc md:mx-4 mx-8">
                      <li>
                        99% successful appointment scheduling through our
                        syndèo.
                      </li>
                      <li>
                        4.8 / 5 Excellent Ratings From clients and customers.
                      </li>
                      <li>
                        Thousands of meetings scheduled through syndèo platform.
                      </li>
                      <li>
                        Services available across all the countries of the
                        globe.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <form action="" method="POST" className="mt-8">
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-8/12 w-auto">
                      <a
                        href="/interviewer"
                        className="hover:shadow-form rounded-3xl bg-colorFour hover:bg-colorFour transition duration-1000 ease-in-out py-3 px-12 text-base font-semibold text-white outline-none"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
