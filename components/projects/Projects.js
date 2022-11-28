import { useEffect } from 'react';
import styled from '@emotion/styled';
import { devices } from '@utils/devices';
import Image from 'next/image';
import QuizzicalDetails from './quizzical/Details';
import MovieDomDetails from './moviedom/Details';
import PortfolioDetails from './portfolio/Details';
import AOS from 'aos';
import 'aos/dist/aos.css';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Wrapper = styled.div`
  width: min(80%, 100vw);
  margin-inline: auto;
  margin-top: 5rem;
`;

const ProjectWrapper = styled.div`
  display: flex;
  margin-bottom: 12rem;

  @media ${devices.laptopMaxWidth} {
    display: flex;
    flex-flow: column;
    margin-bottom: 5rem;

    #moviedom-image-wrapper {
      order: 1;
    }

    #moviedom-details-wrapper {
      order: 2;
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  max-height: 300px;

  &:hover img {
    transform: scale(1.2);
  }

  @media ${devices.laptopMaxWidth} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;

  @media ${devices.laptopMaxWidth} {
    position: static;
    margin: 0 auto;
  }

  img {
    transition: all 0.5s ease;
  }
`;

const ProjectDetails = styled.div`
  width: 50%;
  padding: 0 1rem;

  h2 {
    background: -webkit-linear-gradient(darkblue, darkviolet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-weight: 500;
    padding: 1rem 0;

    a {
      color: blue;
    }
  }

  .btn-view {
    margin: 0.5rem 0.2rem;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0;

    .badge {
      margin: 0.2rem;
    }
  }

  @media ${devices.laptopMaxWidth} {
    width: 90%;
    margin: auto;
    padding: 1rem 0.5rem;
  }

  @media ${devices.tabletMaxWidth} {
    width: 100%;
  }
`;

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="projects">
        <Wrapper>
          <h1 className="title" data-aos="slide-right" data-aos-once>
            Projects
          </h1>
          <ProjectWrapper data-aos="slide-up" data-aos-once>
            <Container>
              <ImageWrapper>
                <Image
                  loader={myLoader}
                  src={'/quizzical.png'}
                  alt="Quizzical App snapshot"
                  width={600}
                  height={300}
                  priority
                />
              </ImageWrapper>
            </Container>
            <ProjectDetails>
              <QuizzicalDetails />
            </ProjectDetails>
          </ProjectWrapper>

          <ProjectWrapper data-aos="slide-up" data-aos-once>
            <ProjectDetails id="moviedom-details-wrapper">
              <MovieDomDetails />
            </ProjectDetails>
            <Container>
              <ImageWrapper id="moviedom-image-wrapper">
                <Image
                  loader={myLoader}
                  src={'/moviedom.png'}
                  alt="MovieDom App snapshot"
                  width={600}
                  height={300}
                  priority
                />
              </ImageWrapper>
            </Container>
          </ProjectWrapper>

          <ProjectWrapper data-aos="slide-up" data-aos-once>
            <Container>
              <ImageWrapper>
                <Image
                  loader={myLoader}
                  src={'/portfolio.png'}
                  alt="My Portfolio snapshot"
                  width={600}
                  height={300}
                  priority
                />
              </ImageWrapper>
            </Container>
            <ProjectDetails>
              <PortfolioDetails />
            </ProjectDetails>
          </ProjectWrapper>
        </Wrapper>
      </section>
    </>
  );
};

export default Projects;
