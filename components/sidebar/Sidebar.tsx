import { HomePageAtom } from "@/helper";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { AppStoreButton, GooglePlayButton } from "../buttons";
import { CloseIcon } from "../icons";

interface Props {
  openSidebar: boolean;
  setOpenSidebar: any;
}

const routse = [
  { path: "/", name: "HOW IT WORKS" },
  { path: "/about", name: "ABOUT US" },
  { path: "/blog", name: "BLOG" },
  { path: "/faq", name: "FAQ’s" },
];

const Sidebar = ({ openSidebar, setOpenSidebar }: Props) => {
  const [homePage, setHomePage] = useRecoilState(HomePageAtom);

  return (
    <>
      <div
        className={` ${
          openSidebar ? "left-0 " : "-left-full"
        } top-0 left-0 w-[60vw] px-5 bg-white shadow-lg z-50 fixed h-[100vh] overflow-y-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between mt-[30px]">
          <Link href="/">
            <img className="h-16" src="/junkker.png" alt="junkker" />
          </Link>
          <button className=" " onClick={() => setOpenSidebar(false)}>
            <CloseIcon className="w-6 text-[#46474a]" />
          </button>
        </div>

        <div
          onClick={() => setOpenSidebar(false)}
          className="px-[10px] pb-5 text-[#46474a] space-y-3   border-b"
        >
          {routse.map((route, i) => {
            return (
              <Link className="block" href={route.path} key={i}>
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className="flex space-y-2 flex-col">
            <GooglePlayButton bgcolor="bg-black" href={homePage?.playstore_link} /> 
            <AppStoreButton bgcolor="bg-black" href={homePage?.appstore_link} />
        </div>
      </div>
      {openSidebar ? (
        <div
          onClick={() => setOpenSidebar(false)}
          className="opacity-25 fixed inset-0 z-40 bg-black  "
        ></div>
      ) : null}
    </>
  );
};

export default Sidebar;
