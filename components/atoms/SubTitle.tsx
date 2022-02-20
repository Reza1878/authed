import clsx from "clsx";
import React, { HTMLAttributes } from "react";

function SubTitle(props: HTMLAttributes<HTMLParagraphElement>) {
  const { children, className: styles } = props;
  return (
    <p
      className={clsx(
        "font-sans text-[16px] leading-7 text-sub-title mt-2",
        styles
      )}
    >
      {children}
    </p>
  );
}

export default SubTitle;
