import React from "react";
import styled from "styled-components";
import logo from "../../images/wolf_logo.jpg";
import text from "./text";
import colors from "../../colors/colors";

const LandingPage = () => {
  return (
    <Landing>
      <Image src={logo} />
      <Title>{text.text}</Title>
      <Button>Zaczynamy</Button>
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

const Button = styled.button`
  padding: 16px;
  font-size: 15px;
  background-color: ${colors.mainDark};
  color: ${colors.mainGray};
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  &:hover{
      background-color: ${colors.mainBlue}
  }
`;

export default LandingPage;
