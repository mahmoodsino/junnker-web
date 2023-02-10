import React from "react";

interface Props {
    className:string
}


const MobileIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      width="20"
      height="32"
      viewBox="0 0 20 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_309_564)">
        <path
          d="M17 0H3C1.34375 0 0 1.33612 0 2.98295V28.8352C0 30.4821 1.34375 31.8182 3 31.8182H17C18.6562 31.8182 20 30.4821 20 28.8352V2.98295C20 1.33612 18.6562 0 17 0ZM10 29.8295C8.89375 29.8295 8 28.9409 8 27.8409C8 26.7409 8.89375 25.8523 10 25.8523C11.1062 25.8523 12 26.7409 12 27.8409C12 28.9409 11.1062 29.8295 10 29.8295ZM17 23.1179C17 23.5281 16.6625 23.8636 16.25 23.8636H3.75C3.3375 23.8636 3 23.5281 3 23.1179V3.72869C3 3.31854 3.3375 2.98295 3.75 2.98295H16.25C16.6625 2.98295 17 3.31854 17 3.72869V23.1179Z"
          fill="#4A4B4F"
        />
      </g>
      <defs>
        <clipPath id="clip0_309_564">
          <rect width="20" height="31.8182" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MobileIcon;
