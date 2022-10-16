import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

const Hero = ({ session }) => {
  return (
    <div>
     
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-semibold relative">
          <p className="text-cyan-400">Hello There! I am</p>
          <div>
            <h1 className="text-[2.5rem] md:text-7xl text-blue-400">Pradyumna D</h1>
          </div>
          <div className={styles.gradientAnim}>

          <h2 className={`${styles.gradientAnim}${"text-4xl sm:text-7xl font-bold text-white py-2"}`}>
            I'm a Programmer.
          </h2>
          </div>
          <p className="text-gray-400 py-4 max-w-[700px] font-semibold">
            Currently, I'm focused on making exceptional Web Apps
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
