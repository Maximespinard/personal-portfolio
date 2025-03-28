import HomeAboutMe from '../components/Home/HomeAboutMe';
import HomeHeader from '../components/Home/HomeHeader';
import HomeExperience from '../components/Home/HomeExperience';
import HomeStack from '../components/Home/HomeStack';

const Home = () => {
  return (
    <div className="space-y-12">
      <HomeHeader />
      <HomeAboutMe />
      <HomeExperience />
      <HomeStack />
    </div>
  );
};

export default Home;
