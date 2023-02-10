import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
}

const Button = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className=" border-2 hover:bg-primary/5 transition-all duration-200 border-primary text-primary px-7 rounded-md py-2 text-lg font-bold"
    >
      {title}
    </Link>
  );
};

export default Button;
