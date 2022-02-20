import Link from "next/link";
import React from "react";

interface BottomTextProps {
  title: string;
  description: string;
  href: string;
}

function BottomText(props: Partial<BottomTextProps>) {
  const { title, description, href = "/" } = props;
  return (
    <p className="mt-12 text-center font-sans font-semibold text-[16px]">
      {title}{" "}
      <Link href={href}>
        <a className="text-primary-500 cursor-pointer hover:text-primary-600 transition">
          {description}
        </a>
      </Link>
    </p>
  );
}

export default BottomText;
