import React from "react";
import "aos/dist/aos.css";

const Coding2 = () => {
  return (
    <div className="mt-12 px-10">
      <div data-aos="zoom-out-up" ata-aos-delay="1000" data-aos-duration="1500">
        <h3 className="text-5xl font-bold text-gray-700">
          What <span className="underline text-orange-400">pro</span>gramming
          languages I know ?
        </h3>
      </div>

      <div className=" flex flex-row items-center justify-center gap-5 px-5 pt-8"
      data-aos="zoom-in-up" ata-aos-delay="2000" data-aos-duration="1500">
        <div className="basis-1/3">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets8.lottiefiles.com/packages/lf20_ipzmqnqg.json"
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
              src="https://assets10.lottiefiles.com/packages/lf20_yMrzAd.json"
              style={{ width: 350 + "px" }}
            ></lottie-player>
          </div>
        </div>

        <div className="basis-1/3">
          <div>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets5.lottiefiles.com/private_files/lf30_9xcevvfo.json"
              style={{ width: 400 + "px" }}
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding2;
