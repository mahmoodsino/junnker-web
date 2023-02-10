import { BaseButton, SecondaryButton } from "@/components/buttons";
import React from "react";
import ReactStars from "react-stars";

interface Props {
  GoogleReviews: string;
}

const TopSection = ({ GoogleReviews }: Props) => {
  return (
    <div className="relative">
      <div className="bg-main_gray lg:h-[80vh] ">
        <div className="lg:w-[70%] m-auto flex flex-col items-center justify-center ite">
          <h1 className="font-bold sm:text-[30px] md:text-[60px] text-center ">
            SELL YOUR JUNK CAR FOR THE HIGHEST PRICE POSSIBLE
          </h1>
          <h2 className="text-xl text-center w-[65%]">
            If you’re looking to get the most value for your junk vehicle let
            buyers bid on it and get the most out of it
          </h2>
          <div className="flex sm:flex-col md:flex-row sm:space-y-3 md:space-y-0 md:space-x-5 mt-8">
            <BaseButton type="submit" title="Scan Your VIN" />
            <SecondaryButton title="Learn More" />
          </div>
          <div className="flex space-x-2 items-center mt-8">
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={5}
              color2={"#4A4B4F"}
            />
            <span>{GoogleReviews} Google Reviews</span>
          </div>
        </div>
      </div>
      <div className="w-[100%] absolute -bottom-52">
        <div className="w-[80%] gap-5 lg:grid sm:hidden  lg:grid-cols-3 m-auto">
          <img
            className="rounded-md w-[340px] h-[288px] object-contain"
            src="/junkker_one.png"
            alt=""
          />
          <img
            className="rounded-md w-[340px] h-[288px] object-contain"
            src="/junkker_two.png"
            alt=""
          />
          <img
            className="rounded-md w-[340px] h-[288px] object-contain"
            src="/junkker_three.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
