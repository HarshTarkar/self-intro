import Footer from './Footer.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import Hobbies from './Hobbies.jsx'
import App from './App.jsx'
import Header from './Header.jsx'

const HomePage = () => (
  <>
    <Header />
    <App />
    <Footer />
  </>
);

const ProjectsPage = () => (
  <>
    <Header />
    <Projects />
    <Footer />
  </>
);

const ResumePage = () => (
  <>
    <Header />
    <Resume />
    <Footer />
  </>
);

const HobbiesPage = () => (
  <>
    <Header />
    <Hobbies />
    <Footer />
  </>
);

export { HomePage, ProjectsPage, ResumePage, HobbiesPage };