import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { type, id, name, className: styles } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={clsx(
        "rounded-lg bg-primary-gray-500 py-4 px-8 w-full",
        styles
      )}
    />
  );
}

export default Input;
