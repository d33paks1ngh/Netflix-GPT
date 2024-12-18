import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import Footer from "./Footer";
import GPTsearch from "./GPTsearch";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import usePopularTV from "../Hooks/usePopularTV";
import useTopRatedTV from "../Hooks/useTopRatedTV";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTrendingTV from "../Hooks/useTrendingTV";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  usePopularTV();
  useTopRatedTV();
  useTrendingMovies();
  useTrendingTV();

  const show = useSelector((store) => store.showGPT.show);
  // console.log(show)
  return (
    <div className="box-border overflow-x-hidden">
      <Header />
      {show ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
