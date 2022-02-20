/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../atoms/Container";

interface RightContainerProps {
  img: string;
  title: string;
  description: string;
}

function RightContainer(props: RightContainerProps) {
  const { img, title, description } = props;
  return (
    <Container className="lg:w-6/12 hidden lg:block bg-right-side h-screen fixed right-0">
      <img className="w-full mt-40" src={img} alt="login-icon" />
      <div className="mx-auto w-6/12">
        <p className="text-white text-opacity-60 font-semibold font-sans tracking-widest text-sm">
          {title}
        </p>
        <p className="text-white text-xl text-[28px] mt-2">{description}</p>
      </div>
    </Container>
  );
}

export default RightContainer;
