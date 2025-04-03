import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="py-20 text-center text-xs sm:text-sm md:text-base text-gray-700">
      {/* Title Section */}
      <div className="text-center pb-8 text-3xl">
        <Title text1={"OUR"} text2={"POLICIES"} />
      </div>

      {/* Policies Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We Offer Hassle-Free Exchange Policy</p>
        </div>

        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">We Provide 7 Days Free Return Policy</p>
        </div>

        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We Provide 24/7 Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
