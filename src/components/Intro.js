import React from "react";
import "@lottiefiles/lottie-player";
import { TypeAnimation } from 'react-type-animation';
import "aos/dist/aos.css";

const Intro = () => {
  return (
    <div className="bg-[#131226]">

      <div className="flex flex-row p-10 items-center justify-center">

        <div className="basis-1/2"
        data-aos="fade-right"
        ata-aos-delay="1000"
        data-aos-duration="1500">
        <div className="w-[650px]"
         >
        <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_zepuwmfl.json"
            // style={{ width: "400px" }}
          ></lottie-player>
        </div>
         
        </div>


        <div className="basis-1/2"
          data-aos="fade-left"
        ata-aos-delay="1000"
        data-aos-duration="1500">

          <h3 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
            Hello, I am <span>Harry.</span>
          </h3>

          <div className="text-white font-sans text-3xl pt-10">
          <TypeAnimation
      sequence={[
        'a programmer.', // Types 'One'
        1000, // Waits 1s
        'a',
        1000,
        // () => {
        //   console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        // }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
          </div>
          
            

        </div>
      </div>
    </div>
  );
};

export default Intro;
