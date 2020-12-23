import React from "react";
import styled from "styled-components";
import logo from "../../images/wolf_logo.jpg";
import text from "./text";
import Button from "../common/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Landing>
      <Image src={logo} />
      <Title>{text.text}</Title>
      <Button
        onClick={() => {
          loginWithRedirect();
        }}
        desc={"Zaczynamy"}
      />
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
  width: clamp(25%, 151px, 30%);
  text-align: center;
`;

export default LandingPage;
