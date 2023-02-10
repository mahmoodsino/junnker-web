import { MouseEvent, ReactNode } from "react";

interface Props {
  type?: "submit" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string | undefined;
  children?: ReactNode;
  disabled?: boolean;
}

const SecondaryButton = ({
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
          : "w-[217px] border-2 border-black rounded-md py-2 text-lg font-bold"
      }`}
    >
      {title}
      {children}
    </button>
  );
};

export default SecondaryButton;
