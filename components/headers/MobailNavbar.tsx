import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, BurgerIcon } from "../icons";
import { Sidebar } from "../sidebar";

const MobailNavbar = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 350) {
        setGoingUp(true);
      }
      if (currentScrollY <= 350) {
        setGoingUp(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div>
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className={`flex justify-between px-[15px] top-0 md:hidden sm:flex  items-center w-screen ${
          !goingUp ? " h-16 bg-main_gray" : "downn fixed z-50 shadow-md "
        }`}
      >
        <div className="flex space-x-5">
          <Link href="/">
            <img className="h-16" src="/junkker.png" alt="junkker" />
          </Link>
          <button onClick={() => setOpenSidebar(true)}>
            <BurgerIcon className="w-10" />
          </button>
        </div>
        <button className="flex justify-center items-center px-2 space-x-5 py-1.5 font-bold text-lg text-white rounded-md bg-main_blue">
          Support
          <ArrowDown className="stroke-white w-7 ml-3" />
        </button>
      </div>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default MobailNavbar;
