import React, { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title?: string;
  placeholder?: string;
  type?: "text" | "password";
  name?: string;
  optional: boolean;
  register?: any;
}

const BaseInput = ({
  icon,
  name,
  placeholder,
  title,
  type,
  optional,
  register,
}: Props) => {
  return (
    <div className="space-y-1">
      <label htmlFor="" className="flex items-center space-x-1">
        {icon}
        <span className="font-bold text-lg">{title}</span>
        {optional && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        className="w-full outline-none border border-black rounded-md px-3 py-2 "
        placeholder={placeholder}
        name={name}
        {...register && {...register(name)}}
      />
    </div>
  );
};

export default BaseInput;
