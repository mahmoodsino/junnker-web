import { BlogsType } from "@/helper";
import Link from "next/link";
import React from "react";

interface Props {
  blog: BlogsType;
}

const BaseCard = ({ blog }: Props) => {
  return (
    <Link
      href={`/bloginfo?blogId=${blog.id}`}
      className="space-y-3  w-[340px] text-center mt-5"
    >
      <img
        className="rounded-md w-[340px] h-[288px] object-contain"
        src={blog.img}
        alt=""
      />
      <span className="block text-lg font-semibold">{blog.title}</span>
    </Link>
  );
};

export default BaseCard;
