import React from "react";

interface Props {
    className:string
}

const Account = ({className}:Props) => {
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
        d="M20 6.66675C21.7681 6.66675 23.4638 7.36913 24.7141 8.61937C25.9643 9.86961 26.6667 11.5653 26.6667 13.3334C26.6667 15.1015 25.9643 16.7972 24.7141 18.0475C23.4638 19.2977 21.7681 20.0001 20 20.0001C18.2319 20.0001 16.5362 19.2977 15.286 18.0475C14.0357 16.7972 13.3334 15.1015 13.3334 13.3334C13.3334 11.5653 14.0357 9.86961 15.286 8.61937C16.5362 7.36913 18.2319 6.66675 20 6.66675ZM20 23.3334C27.3667 23.3334 33.3333 26.3167 33.3333 30.0001V33.3334H6.66669V30.0001C6.66669 26.3167 12.6334 23.3334 20 23.3334Z"
        fill="#4A4B4F"
      />
    </svg>
  );
};

export default Account;
