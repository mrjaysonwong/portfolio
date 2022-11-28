import styled from '@emotion/styled';
import Experience from './Experience';
import Certifications from './Certifications';
import { devices } from '@utils/devices';

const Wrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  width: min(90%, 100vw);
  margin-inline: auto;

  @media ${devices.mobileLMaxWidth} {
    display: block;
  }
`;

const OneColumn = () => {
  return (
    <>
      <Wrapper>
        <Experience />
        <Certifications />
      </Wrapper>
    </>
  );
};

export default OneColumn;
