import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>
            <h1>Welcome to your professional community</h1>
            <div>
              <ul>
                <li>
                  <a href="#">Search for a job</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Find a person you know</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Learn a new skill</a>{" "}
                </li>
              </ul>
            </div>

            <Btn>
              <img src="/img/google.svg" alt="" />
              <a href="#">Sign in with Google </a>
            </Btn>
          </Heading>
          <Img>
            <img
              src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg"
              alt=""
            />
          </Img>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  max-width: 1128px;
  padding-top: 40px;
  flex-wrap: nowrap;
  margin: auto;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.div`
  padding-right: 40px;
  min-width: 600px;
  width: 100%;
  h1 {
    color: rgba(143, 88, 73, 1);
    font-size: 56px;
    font-weight: 200;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  ul {
    margin-top: 50px;
    width: 600px;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin: 10px;

      a {
        text-decoration: none;
        border: 1px solid #444;
        color: #111;
        padding: 18px 20px;
        text-transform: capitalize;
        background-color: #fff;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          border: none;
        }

        border-radius: 4px;
        @media (max-width: 768px) {
          padding: 15px 18px;
        }
      }
    }
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  width: 300px;
 height: 40px;
 justify-content: center;
 margin-left: 10px;
 border-radius: 4px;

 a{
   text-decoration: none;
   color: #444;
   text-transform: capitalize;
   font-size: 1rem;
   margin-left: 10px;
 }

 &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          border: none;
        }

  @media (max-width: 768px) {
    
  }
`;

const Img = styled.div`
  position: relative;
  z-index: -1;
  img {
    width: 700px;
    height: 560px;

    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
    }
  }
`;
