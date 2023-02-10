import Link from "next/link";
import React from "react";

interface Props {
  bgcolor?: string;
  href: string;
}
const GooglePlayButton = ({ bgcolor, href }: Props) => {
  return (
    <Link
    target={"_blank"}
      href={href ? href : ""}
      className={`${bgcolor ? bgcolor : "bg-white"}   ${
        bgcolor ? "text-white" : "text-black"
      } flex items-center rounded-lg px-4 py-2 space-x-2`}
    >
      <img src="/logos_google-play-icon.svg" alt="" />
      <div className="flex flex-col leading-4 text-left">
        <h4 className="text-sm">GET IT ON</h4>
        <h4 className="font-medium">Google Play</h4>
      </div>
    </Link>
  );
};

export default GooglePlayButton;
