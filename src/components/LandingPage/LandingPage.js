import React from "react";
import styled from "styled-components";
import logo from '../../images/wolf_logo.jpg'

const LandingPage = () => {
  return <Landing>
      <img src={logo}/>
  </Landing>;
};

const Landing = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


export default LandingPage;
