import styled from '@emotion/styled';
import { Card, Text } from '@mantine/core';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as VscIcons from 'react-icons/vsc';
import * as GiIcons from 'react-icons/gi';
import { devices } from '@utils/devices';

const Wrapper = styled.div`
  margin: 4rem 0;
  width: min(90%, 100vw);
  margin-inline: auto;
`;

const CardListWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 1rem;
    background: var(--iconColorSecondary);
    color: #fff;
  }

  .card {
    width: 100%;
    text-align: center;
    height: 100%;

    .mantine-Text-root {
      line-height: 1.3rem;
    }
  }

  @media ${devices.tabletMinWidth2} {
    .card {
      width: 100%;
    }
  }

  .card-section {
    margin: 0;
    display: flex;
    justify-content: center;
  }

  .card-section:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const CardList = () => {
  return (
    <>
      <Wrapper>
        <h2 className="sub-title">My Take on Web Development</h2>
        <CardListWrapper>
          <Card p="sm" className="card">
            <Card.Section className="card-section">
              <i>
                <MdIcons.MdSpeed />
              </i>
            </Card.Section>

            <Text weight={500} size="xl" mt="md">
              Fast
            </Text>

            <Text mt="xs" color="dimmed" size="lg">
              Fast load times and lag free interaction, my highest priority.
            </Text>
          </Card>

          <Card p="sm" className="card">
            <Card.Section className="card-section">
              <i>
                <VscIcons.VscEditorLayout />
              </i>
            </Card.Section>

            <Text weight={500} size="xl" mt="md">
              Responsive
            </Text>

            <Text mt="xs" color="dimmed" size="lg">
              My layouts will work on any device, big or small.
            </Text>
          </Card>

          <Card p="sm" className="card">
            <Card.Section className="card-section">
              <i>
                <FaIcons.FaHandSparkles />
              </i>
            </Card.Section>

            <Text weight={500} size="xl" mt="md">
              Intuitive
            </Text>

            <Text mt="xs" color="dimmed" size="lg">
              Strong preference for easy to use, intuitive UX/UI.
            </Text>
          </Card>

          <Card p="sm" className="card">
            <Card.Section className="card-section">
              <i>
                <GiIcons.GiAtom />
              </i>
            </Card.Section>

            <Text weight={500} size="xl" mt="md">
              Dynamic
            </Text>

            <Text mt="xs" color="dimmed" size="lg">
              Websites don&apos;t have to be static, I love making pages come to
              life.
            </Text>
          </Card>
        </CardListWrapper>
      </Wrapper>
    </>
  );
};

export default CardList;
