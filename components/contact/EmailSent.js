import styled from '@emotion/styled';
import { IconCheck } from '@tabler/icons';

const Wrapper = styled.div`
  display: block;
  

  .icon {
    border-radius: 50%;
    background: green;
    width: 100px;
    height: auto;
    color: #fff;
    padding: 0.5rem;
  }
`;

const EmailSent = () => {
  return (
    <>
      <Wrapper>
        <IconCheck />
        <h1>Message Sent!</h1>
        <h4>Thank you for reaching out.</h4>
      </Wrapper>
    </>
  );
};

export default EmailSent;
