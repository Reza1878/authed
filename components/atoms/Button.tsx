import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

function Button(props: Partial<ButtonProps>) {
  const { children, href = "#" } = props;
  return (
    <Link href={href}>
      <a className="bg-primary-500 w-full py-4 text-center text-white font-sans font-semibold rounded-lg cursor-pointer shadow-md hover:bg-primary-600 transition-all">
        {children}
      </a>
    </Link>
  );
}

export default Button;
