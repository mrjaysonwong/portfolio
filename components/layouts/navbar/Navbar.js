import styled from '@emotion/styled';
import { devices } from '@utils/devices';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-scroll';
import useClickOutside from '@utils/useClickOutside';
import { IconFileText } from '@tabler/icons';
import { ThemeIcon } from '@mantine/core';
import { Tooltip } from '@mantine/core';

const Nav = styled.nav`
  height: ${({ offset }) => (offset > 50 ? '70px' : '100px')};
  position: fixed;
  z-index: 1;
  width: 100%;
  background: var(--backgroundSecondary);
  transition: all 0.5s ease;
  border-image: ${({ offset }) => (offset > 30 ? 'var(--linearBorder)' : '')};
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: ${({ offset }) =>
    offset > 30 ? '3px solid var(--primaryColor)' : ''};

  &.top {
    background: transparent;
    transition: all 0.5s ease;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: min(90%, 100vw);
  margin-inline: auto;
  height: 100%;

  .logo {
    margin-right: 1rem;
    display: flex;
    cursor: pointer;
  }
`;

const NavMenuWrapper = styled.div`
  @media ${devices.tabletMaxWidth} {
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    top: 0;
    height: auto;
    background: #000;
    transform: translateY(${({ sidebar }) => (sidebar ? '0%' : '-100%')});
    transition: all 0.5s ease;
    border-image: var(--linearBorder);
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 3px solid;

    .menu {
      margin-top: 5rem;
      margin-bottom: 1rem;
    }
  }

  @media ${devices.tabletMinWidth} {
    margin-left: auto;
  }
`;

const ListWrapper = styled.div`
  .active {
    color: gold;
  }

  li {
    color: #fff;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    @media ${devices.tabletMinWidth} {
      display: flex;
      align-items: center;
    }
  }

  a:hover {
    color: var(--linkHover);
  }

  @media ${devices.tabletMinWidth} {
    display: flex;
  }
`;

const NavIconWrapper = styled.div`
  margin-left: auto;

  .bars-icon,
  .times-icon {
    color: #fff;
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }

  @media ${devices.tabletMinWidth} {
    display: none;
  }
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleClick = () => {
    setSidebar(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (offset > 30) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, [offset]);

  let domNode = useClickOutside(() => {
    setSidebar(false);
  });

  return (
    <>
      <Nav className={isTop ? 'top' : ''} offset={offset} ref={domNode}>
        <NavWrapper>
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => handleClick()}
            className="logo"
          >
            <Image width={180} height={40} src="/jwlogo.png" priority />
          </Link>

          <NavMenuWrapper sidebar={sidebar} offset={offset}>
            <ul className="menu">
              <ListWrapper>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => handleClick()}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => handleClick()}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => handleClick()}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="/Resume-Jayson-Wong.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Tooltip label="View Resume" position="bottom" withArrow>
                      <ThemeIcon
                        size="lg"
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                      >
                        <IconFileText size={20} />
                      </ThemeIcon>
                    </Tooltip>
                  </a>
                </li>
              </ListWrapper>
            </ul>
          </NavMenuWrapper>
          <NavIconWrapper onClick={() => toggleSidebar()}>
            {!sidebar ? (
              <i className="bars-icon">
                <FaIcons.FaBars />
              </i>
            ) : (
              <i className="times-icon">
                <FaIcons.FaTimes />
              </i>
            )}
          </NavIconWrapper>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
