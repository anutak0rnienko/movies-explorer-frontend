import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import NavTab from './NavTab/NavTab';

const Main = () => {
    return (
      <>
      {/* <Header backgroundColor="#073042" theme={{ default: false }} /> */}
        <main>
          <NavTab />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        <Footer />
      </>
    );
  };
  export default Main;