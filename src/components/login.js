import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>Subscribe to watch all content on Disney+ Hotstar</Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
      
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const LogoOne = styled.img`
  
`;
const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 10px
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5px;
`;
const LogoTwo = styled.img`
  margin-top: 20px;
  width: 90%;
`;