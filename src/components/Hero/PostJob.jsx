import React from "react";
import styled from "styled-components";

const PostJob = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Heading>
            <h1>Post your job for millions of people to see</h1>
          </Heading>

          <Post>
            <a href="#">Post a job</a>
          </Post>
        </Wrapper>
      </Container>
    </div>
  );
};

export default PostJob;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #d3bcb4;
`;
const Wrapper = styled.div`
  max-width: 1128px;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: start;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    
  }
`;
const Heading = styled.div`
  margin-right: 72px;
  h1 {
    font-size: 2rem;
    color: rgba(178, 64, 32, 1);

    @media (max-width: 768px) {
    font-size: 1.9rem;
    
  }
  }
 
`;

const Post = styled.div`

@media (max-width: 768px) {
    margin-top: 60px;
    align-items: flex-start;
    
  }
  a {
    background-color: #e4dddd;
    font-size: 1.2rem;
    color: #444;
    font-weight: 600;
    padding: 15px 40px;
    border-radius: 24px;
    text-decoration: none;
    text-transform: capitalize;
  }
`;
