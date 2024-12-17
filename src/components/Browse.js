import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
