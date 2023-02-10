import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text1?: string;
  text2?: string;
  width?: string;
  height?: string;
}

const FeatuerdItem = ({ icon, text1, text2, height, width }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div
        style={{
          boxShadow: "0px 4.80576px 12.0144px rgba(0, 0, 0, 0.15)",
        }}
        className={` ${width ? width : "w-[90px]"}  rounded-md ${
          height ? height : "h-[90px]"
        }  flex justify-center items-center`}
      >
        <div className="w-[94%] h-[94%] rounded-md bg-main_gray flex justify-center items-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold">{text1}</h3>
      <span className="text-lg whitespace-nowrap text-[#797979]">{text2}</span>
    </div>
  );
};

export default FeatuerdItem;
