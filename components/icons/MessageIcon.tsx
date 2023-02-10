import React from "react";

interface Props {
    className:string
}

const MessageIcon = ({className}:Props) => {
  return (
    <svg
      width="40"
      className={className}
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.33325C10.81 3.33325 3.33337 9.31492 3.33337 16.6666C3.33337 21.5116 6.49504 25.8599 11.6667 28.2233V36.6666L20.5667 29.9916C29.495 29.7566 36.6667 23.8666 36.6667 16.6666C36.6667 9.31492 29.19 3.33325 20 3.33325ZM15.5034 23.3099H12.505V20.3133L20.7984 12.0299L23.795 15.0283L15.5034 23.3099ZM25.2084 13.6166L22.21 10.6199L24.4967 8.33492L27.495 11.3316L25.2084 13.6166Z"
        fill="#4A4B4F"
      />
    </svg>
  );
};

export default MessageIcon;
