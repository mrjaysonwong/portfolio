import styled from '@emotion/styled';
import { useEffect } from 'react';
import Email from './Email';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = styled.div`
  width: min(90%, 100vw);
  margin-inline: auto;
  margin-top: 5rem;
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <section id="contact">
        <Wrapper>
          <h1 className="title" data-aos="slide-right" data-aos-once>
            Contact
          </h1>
          <h2 className="sub-title contact" data-aos="slide-left" data-aos-once>
            Have a question or want to work together? <br />
            Get in touch
          </h2>
          <div data-aos="fade" data-aos-once>
            <Email />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Contact;
