import { Badge, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';

const Details = () => {
  return (
    <>
      <h2>Quizzical App</h2>
      <div className="technologies">
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
      </div>
      <p className="description">
        This is a trivia quiz app. It asks questions on what category you
        selected and you just have to pick you answers from the options
        provided. It uses its data from <br />
        <a
          href="https://opentdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Trivia Database
        </a>{' '}
        - an open source database.
      </p>

      <Button
        variant="outline"
        color="violet"
        radius="lg"
        rightIcon={<IconExternalLink size={14} />}
        className="btn-view"
      >
        <a
          href="https://mrjaysonwong.github.io/quizzical-v3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>
      </Button>

      <Button
        variant="outline"
        color="violet"
        radius="lg"
        rightIcon={<IconExternalLink size={14} />}
        className="btn-view"
      >
        <a
          href="https://github.com/mrjaysonwong/quizzical-v3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repo
        </a>
      </Button>
    </>
  );
};

export default Details;
