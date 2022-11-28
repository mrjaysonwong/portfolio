import styled from '@emotion/styled';
import { devices } from '@utils/devices';

const Wrapper = styled.div`
  margin: 4rem 0;
  width: min(90%, 100vw);
  margin-inline: auto;

  @media ${devices.tabletMinWidth} {
    display: flex;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  .display-photo {
    width: 220px;
    height: 210px;
    border-radius: 50%;
  }
`;

const DescriptionWrapper = styled.div`
  @media ${devices.tabletMinWidth} {
    width: min(70%, 100vw);
    margin: auto;
  }

  .about-me {
    margin: 1rem 0.5rem;
    text-indent: 1.2rem;
    padding: 0 0.5rem;
  }
`;

const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img
            src="/dp.png"
            alt="Jayson Wong Photo"
            className="display-photo"
            loading="lazy"
          />
        </ImageWrapper>
        <DescriptionWrapper>
          <p className="about-me">
            Hi, I&apos;m Jayson a Front-end web developer from the Philippines
            with more than 1-year experience in the field.
          </p>
          <p className="about-me">
            My interest in web development started way back when Friendster came
            out. It is a social media platform, It always fascinates me whenever
            I&apos;m using that because you can edit your profile with basic
            html and css. That was the time I decided to pursue this career and
            later on making and developing websites is my passion.
          </p>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
};

export default AboutMe;
