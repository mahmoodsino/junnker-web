import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "../icons";

const routse = [
  { path: "/", name: "HOW IT WORKS" },
  { path: "/about", name: "ABOUT US" },
  { path: "/blog", name: "BLOG" },
  { path: "/faq", name: "FAQ’s" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [goingUp, setGoingUp] = useState(false);

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
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className={`${
        !goingUp
          ? "md:h-24 sm:h-0 bg-main_gray"
          : "down   shadow-md sm:hidden md:block  fixed top-0 left-0 right-0 m-auto  z-[1000]"
      } `}
    >
      <div className="2xl:container h-full m-auto  justify-between md:flex sm:hidden md:px-3 lg:px-20 items-center">
        <Link href="/">
          <img className="h-16" src="/junkker.png" alt="junkker" />
        </Link>
        <div className="space-x-10">
          {routse.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.path}
                className={`font-semibold text-lg hover:text-primary transition-all duration-200 ease-in-out ${
                  pathname.slice(1) !== item.path.slice(1)
                    ? "text-black"
                    : "text-primary"
                }  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <button className="flex justify-center items-center px-2 space-x-5 py-1.5 font-bold text-lg text-white rounded-md bg-main_blue">
          Support
          <ArrowDown className="stroke-white w-7 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
