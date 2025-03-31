import AboutMe from '../components/home/AboutMe.tsx';
import Header from '../components/home/Header.tsx';
import Experience from '../components/home/Experience.tsx';
import Stacks from '../components/home/Stacks.tsx';
import ProjectExamples from '../components/home/ProjectExamples.tsx';
import ContactForm from '../components/home/ContactForm.tsx';

const Home = () => {
  return (
    <div className="space-y-12">
      <Header />
      <AboutMe />
      <Experience />
      <Stacks />
      <ProjectExamples />
      <ContactForm />
    </div>
  );
};

export default Home;
