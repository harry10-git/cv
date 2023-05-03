import React from "react";
import "aos/dist/aos.css";


const Skills = () => {
  return (
    <div className="bg-[#131226]">
      <h3 className="text-white text-5xl p-5 font-semibold font-sans pt-10">
        have a look at my skills.
      </h3>

      <div className="flex flex-row items-center justify-center gap-5 px-10">
        <div className="basis-1/2">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets5.lottiefiles.com/packages/lf20_dydyldzm.json"
              //   style={{ width: 40 + "rem" }}
            ></lottie-player>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col text-left">
          <h3 className="text-white text-4xl font-medium">Web Development.</h3>
          <p className="text-white text-left pr-[150px] pt-4 text-2xl">
            Practing web dev since December 2022. Learning enthusiast who is
            familiar uses React and tailwind for frontend , NodeJs for backend,
            MongoDB and SQL for database
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 px-[7rem] mt-[-150px]">
        <div className="basis-1/2 flex flex-col text-left">
          <h3 className="text-white text-4xl font-medium">Graphics design.</h3>
          <p className="text-white text-left pt-4 text-2xl">
            Intermediate Graphics desinger. Started the journey with Adobe
            Photoshop but realised down the line that it isn't my strongest
            suit. Shifted to Figma and Canva for now.
          </p>
        </div>

        <div className="basis-1/2">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets2.lottiefiles.com/packages/lf20_2imlehvj.json"
              //   style={{ width: 40 + "rem" }}
            ></lottie-player>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 px-16 mt-[-120px]">
        <div className="basis-1/2">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets1.lottiefiles.com/packages/lf20_iiqxzbbp.json"
              style={{ width: 30 + "rem" }}
            ></lottie-player>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col text-left">
          <h3 className="text-white text-4xl font-medium">Content Writing</h3>
          <p className="text-white text-left pr-[150px] pt-4 text-2xl">
            Have a keen interest in Writing since school. Started as a fiction
            writer in secondary school I do have experience as a content writer
            for technical subjects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
