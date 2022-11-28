import styled from '@emotion/styled';
import { devices } from '@utils/devices';
import { Button } from '@mantine/core';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  height: 80vh;
  background: var(--linear);
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (orientation: landscape) {
    height: 120vh;
  }

  @media ${devices.laptopMinWidth} {
    height: 90vh;
  }

  @media ${devices.mobileSMaxWidth} {
    height: 100vh;
  }

  .wave {
    position: absolute;
    height: 120px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
  }

  .wave-layer {
    background-image: url('/wave.svg');
  }

  @media ${devices.tabletMinWidth} {
    .wave {
      height: 190px;
    }
  }
`;

const LandingTitle = styled.div`
  display: block;
  width: min(80%, 100vw);
  margin-inline: auto;

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h1 > span {
    color: var(--primaryColor);
  }

  @media ${devices.tabletMinWidth} {
    width: min(50%, 100vw);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  .btn {
    color: white;
  }

  .btn:hover {
    transition: all 0.8s ease;
    background: var(--primaryColor);
    border: none;
  }
`;

const Header = () => {
  return (
    <>
      <section id="header">
        <Wrapper>
          <LandingTitle>
            <h1>
              Hello, I&apos;m <span>Jayson Wong</span>. <br /> I&apos;m a
              Front-End web developer.
            </h1>
            <ButtonWrapper>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <Button
                  variant="outline"
                  color="violet"
                  size="xl"
                  className="btn work"
                >
                  View my work
                </Button>
              </Link>
            </ButtonWrapper>
          </LandingTitle>
          <div className="wave wave-layer"></div>
        </Wrapper>
      </section>
    </>
  );
};

export default Header;
