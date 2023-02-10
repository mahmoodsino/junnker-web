import { BaseButton, Button } from "@/components/buttons";
import { CarIcon, GooglePlus, StartIcon } from "@/components/icons";
import React from "react";
import { FeatuerdItem } from "../element";

const JoinSellers = () => {
  return (
    <div className="lg:mt-[278px] sm:mt-5 lg:w-[70%] m-auto">
      <div className="text-center space-y-2">
        <h3 className="text-2xl text-center font-semibold text-[#797979]">
          JOIN THOUSANDS OF SELLERS
        </h3>
        <h3 className="text-4xl font-bold ">Sell Your Junk Car Fast</h3>
      </div>
      <div className="lg:flex sm:hidden items-start my-10 w-fit m-auto">
        <FeatuerdItem
          icon={<CarIcon className="fill-primary" />}
          text1="800+"
          text2="SOLD"
        />
        <img className="ml-8 mt-7" src="/link1.svg" alt="Link" />
        <div className="flex flex-col justify-center items-center space-y-2">
          <div
            style={{
              boxShadow: "0px 4.80576px 12.0144px rgba(250, 93, 58, 0.28)",
              background: "linear-gradient(180deg, #FA5D3A 0%, #FFBB6A 100%)",
            }}
            className="w-[90px] bg-primary rounded-md h-[90px] flex justify-center items-center"
          >
            <div className=" flex justify-center items-center">
              <GooglePlus className="fill-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold">4.8</h3>
          <span className="text-lg text-[#797979] whitespace-nowrap">
            GOOGLE REVIEWS
          </span>
        </div>
        <img className="mt-10" src="/link2.svg" alt="link" />
        <FeatuerdItem
          icon={<StartIcon className="fill-primary" />}
          text1="4.9"
          text2="TRUSTPILOT REVIEWS"
        />
      </div>
      <div className="flex flex-col pb-10 space-y-5 justify-center items-center">
        <h4 className="text-xl text-center w-[90%]">
          If you’re looking to get the most value for your junk vehicle let
          vehicle let buyers bid on it and get the most out of it
        </h4>
        <Button href="/sellyourCar" title="SELL YOUR CAR NOW" />
      </div>
    </div>
  );
};

export default JoinSellers;
