import styled from '@emotion/styled';
import { ThemeIcon, Text, Timeline } from '@mantine/core';
import { IconCalendar } from '@tabler/icons';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Experience = () => {
  return (
    <>
      <Wrapper style={{ maxWidth: 320, margin: 'auto' }}>
        <h2 className="sub-title">Work Experience</h2>
        <Timeline>
          <Timeline.Item
            title="Freelance"
            bulletSize={24}
            bullet={
              <ThemeIcon
                size={30}
                variant="gradient"
                gradient={{ from: 'darkblue', to: 'darkorchid' }}
                radius="xl"
              >
                <IconCalendar size={20} />
              </ThemeIcon>
            }
          >
            <Text color="black" size="sm">
              Front-End Web Developer
            </Text>
            <Text color="dimmed" size="sm">
              Mar 2022 - Present
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Demand Science"
            bulletSize={24}
            bullet={
              <ThemeIcon
                size={30}
                variant="gradient"
                gradient={{ from: 'darkblue', to: 'darkorchid' }}
                radius="xl"
              >
                <IconCalendar size={20} />
              </ThemeIcon>
            }
          >
            <Text color="black" size="sm">
              Data Production Manager
            </Text>
            <Text color="dimmed" size="sm">
              May 2019 - May 2020
            </Text>
            <Text color="black" size="sm">
              Senior Q.A Lead
            </Text>
            <Text color="dimmed" size="sm">
              Dec 2015 - May 2019
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Callbox Inc."
            bulletSize={24}
            bullet={
              <ThemeIcon
                size={30}
                variant="gradient"
                gradient={{ from: 'darkblue', to: 'darkorchid' }}
                radius="xl"
              >
                <IconCalendar size={20} />
              </ThemeIcon>
            }
          >
            <Text color="black" size="sm">
              Marketing Data Quality Analyst
            </Text>
            <Text color="dimmed" size="sm">
              Jan 2015 - Nov 2015
            </Text>
            <Text color="black" size="sm">
              Marketing Team Lead
            </Text>
            <Text color="dimmed" size="sm">
              Jun 2014 - Dec 2014
            </Text>
            <Text color="black" size="sm">
              Marketing Associate
            </Text>
            <Text color="dimmed" size="sm">
              May 2013 - Jun 2014
            </Text>
          </Timeline.Item>
        </Timeline>
      </Wrapper>
    </>
  );
};

export default Experience;
