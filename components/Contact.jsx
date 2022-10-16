import React from "react";

const Contact = () => {
  return (
    <div className={`${"w-full h-fit bg-[#190d27]"}`}>
      <div>
        <ul>
          <div className="w-full h-full pt-24 p-4 sm:p-24 text-5xl font-bold text-pink-400">
            <div
              className={`${"text-4xl sm:text-7xl font-bold text-center w-fit"}`}
            >
              <h1 className={``}>Contact Me!</h1>
            </div>
            <div
              className={`${"text-gray-400 text-base sm:text-2xl pt-6 sm:pt-12"}`}
            >
              <h1>You can find me on discord YARE#8406</h1>
            </div>
            <div className="text-gray-400 text-base sm:text-2xl pt-2">
              <p>Or you can submit the form below to contact me!</p>
            </div>
            <div
              name="contact"
              className="w-full h-fit text-white py-4"
            >
              <form
                method="POST"
                action="https://getform.io/f/eb7ad9cb-3d7f-4bc2-99d9-c2f6ad8b8747"
                className="flex flex-col max-w-[600px] w-full text-xl"
              >
                <input
                  type="text"
                  placeholder="What do we call you?"
                  name="name"
                  className="my-4 p-2 rounded-lg text-white font-semibold bg-[#2c2c7e] shadow-black shadow-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="coolguy@somethingcool.com"
                  name="email"
                  className="my-1 p-2 rounded-lg text-white font-semibold bg-[#2c2c7e] shadow-black shadow-lg"
                  required
                />
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Say something cool (or whatever you want!)"
                  className="my-1 p-2 rounded-lg text-white font-semibold bg-[#2c2c7e] shadow-black shadow-lg resize-none"
                  required
                ></textarea>
                <button className="text-white border-2 border-purple-600 rounded-md px-6 py-3 my-2 flex items-center w-fit hover:bg-transparent bg-purple-600 hover:border-purple-600 transition duration-300 hover:scale-105">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
