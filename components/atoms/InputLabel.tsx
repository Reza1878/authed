import clsx from "clsx";
import React, { LabelHTMLAttributes } from "react";

function InputLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { className: styles, htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("block mb-2 font-sans font-semibold text-[16px]", styles)}
    >
      {children}
    </label>
  );
}

export default InputLabel;
