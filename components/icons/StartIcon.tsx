import React from "react";

interface Props {
    className:string
}

const StartIcon = ({className}:Props) => {
  return (
    <svg
      width="67"
      height="67"
      className={className}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_303_186)">
        <path
          d="M48.2943 46.3219L54.324 64.8846L33.9138 50.0499L48.2943 46.3219ZM66.9424 26.0576H41.7084L33.9166 2.04614L26.0972 26.0632L0.86322 26.0301L21.2982 40.8897L13.4788 64.8819L33.9138 50.0499L46.5322 40.8897L66.9424 26.0576Z"
          fill="current"
        />
      </g>
      <defs>
        <clipPath id="clip0_303_186">
          <rect
            width="66.0791"
            height="66.0791"
            fill="white"
            transform="translate(0.863281 0.424438)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StartIcon;
