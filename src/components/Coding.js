import React from "react";
import "aos/dist/aos.css";

const Coding = () => {
  return (
    <div className="px-10 mt-[-100px]">
      

      <div className=" flex flex-row items-center justify-center gap-5 px-5 pt-16"
      data-aos="zoom-in-up" ata-aos-delay="1000" data-aos-duration="1500">
        <div className="basis-1/3">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets6.lottiefiles.com/packages/lf20_buopyjyz.json"
              //   style={{ width: 40 + "rem" }}
            ></lottie-player>
          </div>
        </div>

        <div className="basis-1/3 flex items-center justify-center">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/private_files/lf30_WVVTq8.json"
              style={{ width: 300 + "px" }}
            ></lottie-player>
          </div>
        </div>

        <div className="basis-1/3">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets9.lottiefiles.com/packages/lf20_zh6xtlj9.json"
              //   style={{ width: 40 + "rem" }}
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
