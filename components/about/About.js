import { useEffect } from 'react';
import styled from '@emotion/styled';
import CardList from './CardList';
import Intro from './Intro';
import Technologies from './Technologies';
import OneColumn from './OneColumn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = styled.div`
  margin-top: 5rem;
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <section id="about">
        <Wrapper>
          <h1 className="title" data-aos="slide-right" data-aos-once>
            About
          </h1>
          <div data-aos="slide-left" data-aos-once>
            <Intro />
          </div>
          <div data-aos="slide-right" data-aos-once>
            <CardList />
          </div>
          <div data-aos="fade" data-aos-once>
            <Technologies />
          </div>
          <div data-aos="fade" data-aos-once>
            <OneColumn />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;
