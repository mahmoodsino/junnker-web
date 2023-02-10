import { MouseEvent, ReactNode } from "react";

interface Props {
  type?: "submit" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string | undefined;
  children?: ReactNode;
  disabled?: boolean;
}

const BaseButton = ({
  onClick,
  disabled,
  title,
  className,
  type,
  children,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
      className={`${
        className
          ? className
          : "text-xl font-bold w-[217px] rounded-md bg-primary text-white px-4 py-2"
      }`}
    >
      {title}
      {children}
    </button>
  );
};

export default BaseButton;
