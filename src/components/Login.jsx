import React from "react";
import styled from "styled-components";
import Connect from "./Hero/Connect";
import Header from "./Hero/Header";
import PostJob from "./Hero/PostJob";
import Section from "./Hero/Section";

const Login = ({ title }) => {
  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img src="/img/login-logo.svg" alt="" />
          </a>

          <div>
            <Join>Join now</Join>
            <SignIn>Sign in</SignIn>
          </div>
        </Nav>
        <Header />
        <Section />
        <PostJob />

        <Connect />
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div``;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 16px 0 12px;
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;
  justify-content: space-between;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 1.2rem;
  color: rgba(0,0,0,0.6);
  padding: 10px 12px;
  border-radius: 3px;
  font-weight: 600;
  margin-right: 12px;
  text-decoration: none;

  &:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
 color: #0a66c2;
 font-size: 1.2rem;
 margin-right: 12px;
 box-shadow: inset 0 0 0 1px #0a66c2;
 padding: 10px 24px;
 border-radius: 24px;
 line-height: 32px;
 font-weight: 600;
 transition-duration: 167ms;
 text-align: center;
 background-color: rgba(0, 0, 0, 0);
 &:hover{
    background-color: rgba(112, 181, 249, 0.15);

  }
 `;