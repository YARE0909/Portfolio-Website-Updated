import React from "react";
import styles from "../styles/Skills.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <div className={`${"w-full h-fit sm:h-screen bg-[#190d27]"}`}>
        <ul>
          <div className="w-full h-full pt-24 p-4 sm:p-24 text-5xl font-bold text-blue-400">
            <div
              className={`${"text-4xl sm:text-7xl font-bold text-center w-fit"}`}
            >
              <h1 className={`${styles.glitch}`}>Skills</h1>
            </div>
          </div>
        </ul>
        <div>
          <div className="sm:px-32 px-4 font-semibold text-cyan-300 text-lg sm:text-3xl">
            <p>These are the platforms I have worked with</p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 font-semibold sm:px-32 p-2 text-gray-300">
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                src="https://my-portfolio-pi-murex.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png"
                width={80}
                height={80}
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>HTML</p>
            </div>
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                src="https://my-portfolio-pi-murex.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png"
                width={80}
                height={80}
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>CSS</p>
            </div>
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                src="https://my-portfolio-pi-murex.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
                width={80}
                height={80}
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>JavaScript</p>
            </div>
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                src="https://my-portfolio-pi-murex.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png"
                width={80}
                height={80}
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>React</p>
            </div>
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                width={80}
                height={80}
                src="data:image/png;base64,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"
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>Python</p>
            </div>
            <div className="shadow-lg shadow-black hover:scale-105 duration-300 rounded-lg bg-[#32269e] py-8">
              <Image
                src="https://my-portfolio-pi-murex.vercel.app/static/media/github.3b9e32903aa89111875d.png"
                width={80}
                height={80}
                alt="HTML Icon"
                className="w-20 mx-auto mt-2"
              />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
