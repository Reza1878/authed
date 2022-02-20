import clsx from "clsx";
import React, {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import Input from "../atoms/Input";
import InputLabel from "../atoms/InputLabel";

interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  appendLabel: ReactNode;
}

function TextField(props: Partial<TextFieldProps>) {
  const { className: styles, label, name, type = "text", appendLabel } = props;
  return (
    <div className={clsx("mb-6", styles)}>
      <div className="flex justify-between">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        {appendLabel}
      </div>
      <Input name={name} id={name} type={type} />
    </div>
  );
}

export default TextField;
