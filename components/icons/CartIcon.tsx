import React from "react";

interface Props {
    className:string
}

const CartIcon = ({className}:Props) => {
  return (
    <svg
      width="28"
      height="28"
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 26.25C9.7165 26.25 10.5 25.4665 10.5 24.5C10.5 23.5335 9.7165 22.75 8.75 22.75C7.7835 22.75 7 23.5335 7 24.5C7 25.4665 7.7835 26.25 8.75 26.25Z"
        fill="current"
      />
      <path
        d="M21 26.25C21.9665 26.25 22.75 25.4665 22.75 24.5C22.75 23.5335 21.9665 22.75 21 22.75C20.0335 22.75 19.25 23.5335 19.25 24.5C19.25 25.4665 20.0335 26.25 21 26.25Z"
        fill="current"
      />
      <path
        d="M4.3575 2.4535C4.31787 2.25522 4.21078 2.07678 4.05446 1.94853C3.89813 1.82027 3.70221 1.75012 3.5 1.75H0V3.5H2.7825L6.1425 20.2965C6.18213 20.4948 6.28922 20.6732 6.44554 20.8015C6.60187 20.9297 6.79779 20.9999 7 21H22.75V19.25H7.7175L7.0175 15.75H22.75C22.949 15.75 23.1421 15.6821 23.2974 15.5575C23.4527 15.433 23.5608 15.2592 23.604 15.0649L25.5885 6.125H23.7974L22.0482 14H6.6675L4.3575 2.4535Z"
        fill="current"
      />
      <path
        d="M18.8878 8.23725L15.75 5.0995V12.25H14V5.0995L10.8622 8.23725L9.625 7L14.875 1.75L20.125 7L18.8878 8.23725Z"
        fill="current"
      />
    </svg>
  );
};

export default CartIcon;
