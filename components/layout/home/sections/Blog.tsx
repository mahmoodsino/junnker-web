import { AppStoreButton, Button, GooglePlayButton } from "@/components/buttons";
import { BaseCard } from "@/components/cards";
import { BlogsType } from "@/helper";
import React from "react";

interface Props {
  Blogs: BlogsType[];
  playstore_link: String;
  appstore_link: String;
}

const Blog = ({ Blogs, appstore_link, playstore_link }: Props) => {
  return (
    <div className="my-5 lg:px-12 sm:px-3">
      <div className="text-center  space-y-2">
        <h3 className="text-4xl text-center font-bold ">Our Blog</h3>
        <h3 className="text-2xl font-semibold text-therd_gray ">
          READ ALL ABOUT IT
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   my-10">
        {Blogs?.map((item, i) => {
          return (
            <div key={i} className="m-auto">
              <BaseCard blog={item} />
            </div>
          );
        })}
      </div>
      <div className="m-auto flex justify-center">
        <Button href="/blog" title="FULL BLOG" />
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, #FA5D3A 0%, #FA5D3A 53.12%, #F9A645 100%)",
        }}
        className="px-10 my-28 relative py-6  rounded-xl text-white"
      >
        <div className="space-y-3">
          <h3 className="md:w-[30%] font-medium text-3xl">
            Download the free JUNKKER app
          </h3>
          <h4 className="text-xl  tracking-wider ">Sell or buy any vehicles</h4>
        </div>
        <div className="flex sm:flex-col md:flex-row gap-10 py-5 mt-7">
          <GooglePlayButton href={`${playstore_link}`} />
          <AppStoreButton href={`${appstore_link}`} />
        </div>
        <div className="absolute top-0 left-0">
          <img src="/dots.svg" alt="" />
        </div>
        <div className="absolute bottom-0 left-[28%]">
          <img src="/dots.svg" alt="" />
        </div>
        <div className="absolute sm:hidden  md:flex justify-end right-[10%] -top-[20%]">
          <img className="w-[75%]" src="/mobilephotos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
