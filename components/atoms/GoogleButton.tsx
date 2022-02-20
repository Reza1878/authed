import React, { HTMLAttributes } from "react";

function GoogleButton(props: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="bg-primary-50 hover:bg-primary-100 rounded-lg py-2 px-4 font-semibold font-sans text-[28px] text-primary-400 hover:text-primary-500 shadow-md transition cursor-pointer">
      G
    </a>
  );
}

export default GoogleButton;
