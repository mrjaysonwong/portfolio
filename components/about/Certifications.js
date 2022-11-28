import styled from '@emotion/styled';
import { Accordion, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';
import { devices } from '@utils/devices';

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;

  @media ${devices.tabletMinWidth} {
    width: min(40%, 100vw);
    margin: 0 auto;
  }
`;

const Certifications = () => {
  return (
    <>
      <Wrapper>
        <h2 className="sub-title">Certifications</h2>
        <Accordion defaultValue="customization">
          <Accordion.Item value="cert1">
            <Accordion.Control>
              The Web Developer Bootcamp 2022
            </Accordion.Control>
            <Accordion.Panel>
              <Button
                variant="outline"
                color="violet"
                radius="lg"
                rightIcon={<IconExternalLink size={14} />}
              >
                <a
                  href="https://udemy-certificate.s3.amazonaws.com/image/UC-273c751d-3176-48b8-af02-88b919eb8a77.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </Button>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="cert2">
            <Accordion.Control>MongoDB Basics</Accordion.Control>
            <Accordion.Panel>
              <Button
                variant="outline"
                color="violet"
                radius="lg"
                rightIcon={<IconExternalLink size={14} />}
              >
                <a
                  href="https://university.mongodb.com/course_completion/b7d81b04-274b-4e97-8b82-90618ab848a9?utm_source=linkedin&utm_medium=social&utm_campaign=university_social_sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </Button>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="cert3">
            <Accordion.Control>JavaScript Course 2021</Accordion.Control>
            <Accordion.Panel>
              <Button
                variant="outline"
                color="violet"
                radius="lg"
                rightIcon={<IconExternalLink size={14} />}
              >
                <a
                  href="https://udemy-certificate.s3.amazonaws.com/image/UC-f67da61e-cd82-49db-b420-b805f511eff3.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </Button>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="cert4">
            <Accordion.Control>
              JavaScript Algorithms and Data Structures
            </Accordion.Control>
            <Accordion.Panel>
              <Button
                variant="outline"
                color="violet"
                radius="lg"
                rightIcon={<IconExternalLink size={14} />}
              >
                <a
                  href="https://www.freecodecamp.org/certification/mrjaysonwong/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </Button>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="cert5">
            <Accordion.Control>Responsive Web Design</Accordion.Control>
            <Accordion.Panel>
              <Button
                variant="outline"
                color="violet"
                radius="lg"
                rightIcon={<IconExternalLink size={14} />}
              >
                <a
                  href="https://www.freecodecamp.org/certification/mrjaysonwong/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show credential
                </a>
              </Button>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    </>
  );
};

export default Certifications;
