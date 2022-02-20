import React from "react";
import SubTitle from "../atoms/SubTitle";
import Title from "../atoms/Title";

interface TitleContainerProps {
  title: string;
  subTitle: string;
}

function TitleContainer(props: TitleContainerProps) {
  const { title, subTitle } = props;
  return (
    <div className="mt-10 mb-10">
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </div>
  );
}

export default TitleContainer;
