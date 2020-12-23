import React from "react";
import styled from "styled-components";
import colors from "../../colors/colors";

const Button = ({ desc, onClick }) => {
  return <StyledButton onClick={()=>{onClick()}}>{desc}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 16px;
  font-size: 15px;
  background-color: ${colors.mainDark};
  color: ${colors.mainGray};
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  &:hover {
    background-color: ${colors.mainBlue};
  }
`;
