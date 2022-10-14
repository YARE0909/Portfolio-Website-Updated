import React from "react";
import styles from "../styles/About.module.css"
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <div className={`${"w-full h-screen bg-[#190d27]"}`}>
        <ul>
          <div className="w-full h-full pt-24 p-4 sm:p-24 text-5xl font-bold text-blue-400">
            <div
              className={`${"text-4xl sm:text-7xl font-bold text-center w-fit"}`}
            >
              <h1 className={`${styles.textLoadAnim}`}>About Me!</h1>
            </div>
            <div className={`${"text-gray-400 text-base sm:text-2xl pt-6 sm:pt-12"}`}>
              <h1 className={`${styles.fadeInAnim}`}>
              &lt&ltCurrently I am a student at SRM Institute Of Science And
                Technology getting my BTech degree in Computer Science
                Engineering(Data Science)
              </h1>
            </div>
            <div className="text-gray-400 text-base sm:text-2xl pt-6">
              <h1 className={`${styles.fadeInAnim}`}>
                {" "}
                &lt&ltI enjoy the process of coding and producing quality products
                with a close attention to detail!
              </h1>
            </div>
            <div className="text-gray-400 text-base sm:text-2xl pt-6">
              <h1 className={`${styles.fadeInAnim}`}>
              &lt&ltRecently I have taken a kneen interest towards web development
                focusing more on the front end making elegant but simple UI.
              </h1>
            </div>
            <div className="text-gray-400 text-base sm:text-2xl pt-6">
              <h1 className={`${styles.fadeInAnim}`}>
              &lt&ltI have picked up multiple programming languages over the years
                of coding. My skillset can be viewd in the{" "}
                <Link
                  href="/skills"
                  className="text-orange-500 border-b-2 border-b-orange-500"
                >
                  skills
                </Link>{" "}
                tab
              </h1>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
