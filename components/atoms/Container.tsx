import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  center?: boolean;
}

function Container(props: Partial<ContainerProps>) {
  const { children, className: styles, center } = props;
  return (
    <div className={clsx("container", styles, { "mx-auto": center })}>
      {children}
    </div>
  );
}

export default Container;
