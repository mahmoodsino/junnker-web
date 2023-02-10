import { HomePageAtom } from "@/helper";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { AppStoreButton, GooglePlayButton } from "../buttons";

const routse = [
  { path: "/", name: "HOME" },
  { path: "/about", name: "ABOUT US" },
  { path: "/", name: "HOW IT WORKS" },
  { path: "/blog", name: "BLOG" },
  { path: "/FAQ", name: "FAQ’s" },
];

const Fotter = () => {
  const [homePage, setHomePage] = useRecoilState(HomePageAtom);

  return (
    <div className="mt-10    ">
      <div className="2xl:container  m-auto sm:px-3 lg:mx-12 flex sm:flex-col md:flex-row  justify-between py-3 border-b md:items-center">
        <div className="lg:space-x-8 md:space-x-5 flex sm:flex-col md:flex-row  sm:text-sm md:text-base">
          {routse.map((route, i) => {
            return (
              <Link key={i} href={route.path} className="font-semibold whitespace-nowrap text-sm">
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className="flex sm:flex-col md:flex-row w-fit sm:space-y-3 md:space-y-0  lg:space-x-8">
          <GooglePlayButton
            href={`${homePage?.playstore_link}`}
            bgcolor="bg-black"
          />
          <AppStoreButton
            href={`${homePage?.appstore_link}`}
            bgcolor="bg-black"
          />
        </div>
      </div>
      <div className="2xl:container m-auto sm:px-3 lg:mx-12 flex sm:flex-col md:flex-row justify-between md:items-center">
        <Link href="/">
          <img className="h-16" src="/junkker.png" alt="junkker" />
        </Link>
        <span className="text-xs">All CopyRIghts Are Reserved @ 2022</span>
      </div>
    </div>
  );
};

export default Fotter;
