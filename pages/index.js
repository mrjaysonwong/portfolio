import About from '@components/about/About';
import Header from '@components/header/Header';
import Projects from '@components/projects/Projects';
import Contact from '@components/contact/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
