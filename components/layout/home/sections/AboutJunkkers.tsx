import { ArrowSmallRight, ShoppingCart } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { FeatuerdItem } from "../element";

const AboutJunkkers = () => {
  return (
    <div className="flex justify-between py-5 ">
      <div className="w-[40%] sm:hidden lg:flex flex-col justify-center">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 24%, 100% 76%, 0% 100%)",
          }}
          className="bg-primary w-[400px] h-[320px] flex justify-center items-center"
        >
          <div
            style={{
              clipPath: "polygon(0 0, 100% 24%, 100% 76%, 0% 100%)",
            }}
            className="bg-white/40 w-[340px] h-[250px]"
          ></div>
        </div>
      </div>
      <div className="sm:w-[100%] lg:w-[50%] px-10">
        <h2 className="font-medium text-therd_gray text-lg">ABOUT JUNKKER</h2>
        <div className="space-y-3">
          <h4 className="font-semibold text-2xl">
            Sell your car within 30 minutes on our JUNKKER App for FREE
          </h4>
          <hr className="w-[10%] border-2 rounded-full border-primary " />
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex items-start space-x-3">
            <FeatuerdItem
              icon={<ShoppingCart className="fill-primary" />}
              height="h-[50px]"
              width="w-[50px]"
            />
            <div>
              <Link href="/selling" className="flex items-center">
                <span className="font-semibold text-lg underline">SELLER</span>
                <ArrowSmallRight className="fill-main_blue" />
              </Link>
              <div className="text-therd_gray mt-3 space-y-2">
                <p>
                  Simply create a vehicle listing by scanning VIN number and
                  attaching pictures.
                </p>
                <p>Submit to auction and accept the highest bid.</p>
                <p>
                  Sellers must describe the vehicle information correctly.
                  Otherwise you will be suspended.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FeatuerdItem
              icon={<ShoppingCart className="fill-primary" />}
              height="h-[50px]"
              width="w-[50px]"
            />
            <div>
              <Link href="/buying" className="flex items-center">
                <span className="font-semibold text-lg underline">BUYER</span>
                <ArrowSmallRight className="fill-main_blue" />
              </Link>
              <div className="text-therd_gray mt-3 space-y-2">
                <p>
                  Simply create a vehicle listing by scanning VIN number and
                  attaching pictures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJunkkers;
