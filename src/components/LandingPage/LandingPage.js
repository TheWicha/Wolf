import React from "react";
import styled from "styled-components";
import logo from "../../images/wolf_logo.jpg";
import text from "./text";
import Button from "../common/Button";

const LandingPage = () => {
  return (
    <Landing>
      <Image src={logo} />
      <Title>{text.text}</Title>
      <Button desc={"Zaczynamy"} />
    </Landing>
  );
};

const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 250px;
`;

const Title = styled.h4`
  width: 50%;
  text-align: center;
`;

export default LandingPage;
