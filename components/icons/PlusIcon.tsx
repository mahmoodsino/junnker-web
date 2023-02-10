import React from "react";

interface Props {
  className: string;
}

const PlusIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="48"
      height="57"
      viewBox="0 0 48 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.94 28.4998C45.94 30.4028 44.4174 31.9434 42.54 31.9434H27.24V47.4346C27.24 49.3377 25.7174 50.876 23.84 50.876C21.9626 50.876 20.44 49.3377 20.44 47.4346V31.9434H5.13999C3.26255 31.9434 1.73999 30.4028 1.73999 28.4998C1.73999 26.5967 3.26255 25.0584 5.13999 25.0584H20.44V9.56711C20.44 7.66405 21.9626 6.12354 23.84 6.12354C25.7174 6.12354 27.24 7.66405 27.24 9.56711V25.0584H42.54C44.4206 25.0573 45.94 26.5957 45.94 28.4998Z"
        fill="current"
      />
    </svg>
  );
};

export default PlusIcon;
