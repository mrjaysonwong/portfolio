import styled from '@emotion/styled';

const MainContainer = styled.main`
  min-height: 100vh;
  margin-bottom: 5rem;

  section .title {
    text-align: center;
    padding-top: 4rem;
    margin-top: -70px;
    margin-bottom: 4rem;
    text-decoration: underline;
    text-underline-offset: 1rem;
    font-weight: 600;
  }

  .sub-title {
    text-align: center;
    padding: 1rem;
    font-weight: 500;
  }

  .sub-title.contact {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
  }

  h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  h2 {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
  }

  h3 {
    font-size: clamp(1.1rem, 3vw, 1.6rem);
  }

  h4 {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }

  p {
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    white-space: pre-wrap;
  }

  i {
    font-size: clamp(4rem, 5vw, 6rem);
    
  }
`;

export default MainContainer;
