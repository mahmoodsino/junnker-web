import { FAQsType } from "@/helper";
import React from "react";
import Collapsible from "react-collapsible";

interface Props {
  FAQs: FAQsType[];
}

const WhyJunkkers = ({ FAQs }: Props) => {
  return (
    <div className="py-10 ">
      <div className="lg:w-[45%] text-center m-auto space-y-3 ">
        <h2 className=" font-bold  text-3xl">
          Quick and reliable way to sell or buy any vehicle
        </h2>
        <h3 className="font-semibold text-3xl text-therd_gray">
          WHY USING OUR JUNKKER MOBILE APP
        </h3>
      </div>
      <div>
        <img className=" m-auto" src="/appgroup.svg" alt="" />
        <div className="lg:flex sm:hidden justify-between px-14">
          <img src="/opacity_junk.png" alt="" />
          <img src="/opacity_junk.png" alt="" />
          <img src="/opacity_junk.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[40%] lg:block sm:hidden ">
          <img src="/road.png" alt="" />
        </div>
        <div className="lg:w-[50%] mt-5 sm:px-3 md:px-0">
          <h2 className="font-medium text-therd_gray text-lg">
            HERE ARE SOME COMMON QUESTIONS ABOUT JUNKKER
          </h2>
          <div className="space-y-3">
            <h4 className="font-semibold text-2xl">
              Frequently Asked Questions
            </h4>
            <hr className="w-[10%] border-2 rounded-full border-primary " />
          </div>
          {FAQs?.map((item, i) => {
            return (
              <div key={i} className=" border-b mr-10">
                <Collapsible
                  tabIndex={0}
                  trigger={<h3 className="ml-3 text-lg">{item.question}</h3>}
                >
                  <div className="border-l-4 text-therd_gray border-l-primary pl-5 ml-10 mb-5">
                    <p>{item.answer}</p>
                  </div>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyJunkkers;
