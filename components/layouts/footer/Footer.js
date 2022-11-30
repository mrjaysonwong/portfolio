import styled from '@emotion/styled';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  color: #fff;
  background: #000;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 4px solid transparent;
  border-style: solid;
  border-image: var(--linearBorder);
`;

const IconWrapper = styled.div`
  width: min(90%, 100vw);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  span {
    margin: 0.5rem;
  }

  i {
    display: flex;
    padding: 0.8rem;
    cursor: pointer;
    border-radius: var(--borderRadius);
  }

  i:hover {
    background: indigo;
    transform: translate(0px, -4px);
    transition: all 0.2s ease;
  }
`;

const Footer = () => {
  return (
    <>
      <footer>
        <Wrapper>
          <IconWrapper>
            <span>
              <a
                href="https://facebook.com/mrjaysonwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaIcons.FaFacebookF size="32px" />
                </i>
              </a>
            </span>
            <span>
              <a
                href="https://github.com/mrjaysonwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FiIcons.FiGithub size="32px" />
                </i>
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/mrjaysonwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaIcons.FaTwitter size="32px" />
                </i>
              </a>
            </span>
            <span>
              <a
                href="https://linkedin.com/in/mrjaysonwong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaIcons.FaLinkedinIn size="32px" />
                </i>
              </a>
            </span>
          </IconWrapper>
        </Wrapper>
      </footer>
    </>
  );
};

export default Footer;
