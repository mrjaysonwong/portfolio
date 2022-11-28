import { Badge, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';

const Details = () => {
  return (
    <>
      <h2>My Portfolio</h2>
      <div className="technologies">
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          NextJS
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          ReactJS
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          JavaScript
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          HTML
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          CSS
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          MantineUI
        </Badge>
        <Badge
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          className="badge"
        >
          Emotion
        </Badge>
      </div>
      <p className="description">
        My Single Page App portfolio to showcase my skills and projects I made.
      </p>
    </>
  );
};

export default Details;
