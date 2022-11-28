import MainContainer from './MainContainer';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
