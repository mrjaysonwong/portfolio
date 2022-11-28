import { Badge, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';

const Details = () => {
  return (
    <>
      <h2>MovieDom App</h2>
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
        This is a simple movie search app. You can search and view latest,
        trending movies and shows. Consuming api from <br />
        <a
          href="https://developers.themoviedb.org/3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Movie Database
        </a>{' '}
        - an open source movie database.
      </p>

      <Button
        variant="outline"
        color="violet"
        radius="lg"
        rightIcon={<IconExternalLink size={14} />}
        className="btn-view"
      >
        <a
          href="https://moviedom-site.vercel.app/"
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
          href="https://github.com/mrjaysonwong/moviedom"
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
