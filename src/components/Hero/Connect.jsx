import React from "react";
import styled from "styled-components";

const Connect = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <div>
              <img
                src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj"
                alt=""
              />
            </div>
            <h1>Connect with people who can help </h1>

            <div>
              <a href="#">Find people you know</a>
            </div>
          </Left>

          <Right>
            <div>
              <img
                src="https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv"
                alt=""
              />
            </div>
            <h1>Learn the skills you need to succeed </h1>

            <div>
                <a href="#">Choose and option</a>
            </div>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Connect;

const Container = styled.div`

 width: 100%;
 height: 600px;
 `;
const Wrapper = styled.div`
 max-width: 1128px;
 margin: auto;
 display: flex;
 margin-top: 70px;

 @media (max-width:768px) {
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
 }

 `;

const Left = styled.div`

@media (max-width:768px) {
    padding: 20px;
    margin-bottom: 30px;
 }
  margin-right: 50px;
  img{
      width: 300px;
      height: 240px;
  }
  h1{
      margin-top: 40px;
      margin-bottom: 40px;
      font-weight: 200;
      font-size: 2.5rem;
      line-height: 3.2rem;
     
      @media (max-width: 768px){
          font-size: 2rem;
      }
  }
  a{
      border: 2px solid #777;
      border-radius: 24px;
      color: #777;
      font-size: 1.2rem;
      text-decoration: none;
      padding: 12px 20px;

      &:hover{
          background-color: #d8d9da;
      }
  }
 `;
const Right = styled(Left)`
 
 a{
     width: 400px;
      border: 2px solid #777;
      border-radius: 4px;
      color: #777;
      font-size: 1.2rem;
      text-decoration: none;
      padding: 12px 70px;

      &:hover{
          background-color: #d8d9da;
      }
  }

`;
