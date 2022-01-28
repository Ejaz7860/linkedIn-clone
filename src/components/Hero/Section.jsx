import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>
            <h2>Explore topics you are interested in </h2>
          </Heading>

          <Content>
            <div>
              <span>CONTENT TOPICS</span>

              <div>
                <ul>
                  <li>
                    <a href="#">see all topics</a>
                  </li>
                  <li>
                    <a href="#">Science and Environment</a>
                  </li>
                  <li>
                    <a href="#">Marketing and advertising</a>
                  </li>
                  <li>
                    <a href="#">Sales and Retail</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Finance and economy</a>
                  </li>
                  <li>
                    <a href="#">Health</a>
                  </li>
                  <li>
                    <a href="#">Business and Management</a>
                  </li>
                </ul>
              </div>
            </div>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #f8f8f8;
`;

const Wrapper = styled.div`
  max-width: 1128px;
  margin: auto;
  padding-top: 70px;
  justify-content: start;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
  }
`;

const Heading = styled.div`
  margin-right: 72px;
  width: 408px;
  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin-right: 72px;
    flex-shrink: 0;
    width: 408px;
    align-self: flex-start;
    font-size: 2.5rem;
    font-weight: 200;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 400px;

  span {
    padding-bottom: 20px;
    font-size: 1rem;
    font-weight: 400;
 }
  @media (max-width: 768px) {
    padding-top: 40px;
    overflow-y: hidden;
    padding-bottom: 20px;
    span {
      padding-left: 10px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      margin: 10px 0;
      padding: 16px 5px 12px;
      a {
        text-decoration: none;
        background-color: #e4dddd;
        font-size: 1.2rem;
        color: #444;
        font-weight: 600;
        padding: 15px 40px;
        border-radius: 24px;
        text-transform: capitalize;
      }
    }
  }
`;
