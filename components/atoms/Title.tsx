import React, { HTMLAttributes } from "react";

function Title(props: HTMLAttributes<HTMLParagraphElement>) {
  const { children } = props;
  return <p className="font-sans font-semibold text-[32px]">{children}</p>;
}

export default Title;
