import styled from '@emotion/styled';
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useStyles } from '@utils/CarouselControl';
import * as SiIcons from 'react-icons/si';
import { IconBrandMantine } from '@tabler/icons';
import { Icon } from '@iconify/react';
import { Tooltip } from '@mantine/core';
import { devices } from '@utils/devices';

const Wrapper = styled.div`
  margin: 4rem 0;
  position: relative;
  padding: 1rem 0;

  .sub-title {
    color: #fff;
  }

  i {
    color: #fff;
  }

  .shiny {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    z-index: -1;
  }

  .shiny-layer {
    background-image: url('/shiny.svg');
  }
`;

const StyledCarousel = styled(Carousel)`
  padding: 2rem 0;
  width: min(90%, 100vw);
  margin: auto;

  @media ${devices.tabletMinWidth} {
    width: min(80%, 100vw);
  }

  .mantine-Carousel-control {
    color: #fff;
    background: #000;
    border: none;
  }
`;

const StyledSlide = styled(Carousel.Slide)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;

  i {
    display: flex;
  }
`;

const Technologies = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { classes } = useStyles();

  return (
    <>
      <Wrapper>
        <h2 className="sub-title">Technologies I mainly use</h2>
        <StyledCarousel
          height={80}
          loop
          align="start"
          slidesToScroll={1}
          plugins={[autoplay.current]}
          withControls={14}
          sx={{ maxWidth: '100%' }}
          classNames={classes}
        >
          <StyledSlide size="20%">
            <Tooltip
              label="Javascript"
              position="left"
              color="violet"
              withArrow
            >
              <i>
                <SiIcons.SiJavascript />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="ReactJS" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiReact />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="NextJS" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiNextdotjs />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="NodeJS" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiNodedotjs />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="ExpressJS" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiExpress />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="MongoDB" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiMongodb />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="Figma" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiFigma />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="Html" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiHtml5 />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="css" position="left" color="violet" withArrow>
              <i>
                <SiIcons.SiCss3 />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip
              label="MaterialUI"
              position="left"
              color="violet"
              withArrow
            >
              <i>
                <SiIcons.SiMaterialui />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip label="MantineUI" position="left" color="violet" withArrow>
              <i>
                <IconBrandMantine size="76px" />
              </i>
            </Tooltip>
          </StyledSlide>
          <StyledSlide size="20%">
            <Tooltip
              label="Postman API"
              position="left"
              color="violet"
              withArrow
            >
              <i>
                <Icon icon="cib:postman" />
              </i>
            </Tooltip>
          </StyledSlide>
        </StyledCarousel>
        <div className="shiny shiny-layer"></div>
      </Wrapper>
    </>
  );
};

export default Technologies;
