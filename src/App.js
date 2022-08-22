import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Overview from "./components/Overview";

const App = () => {
  const [card, setCard] = useState([]);
  const [overviewContent, setOverviewContent] = useState([]);
  const [modal, setModal] = useState(false);

  const showOverview = (data) => {
    setModal(true);
    setOverviewContent(data);
  };

  const hideOverview = () => setModal(false);

  const getMovies = async () => {
    const moviesApi =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1/";

    await fetch(moviesApi)
      .then((response) => response.json())
      .then((json) => setCard(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const searchMovies = async (info) => {
    const searchedTitle = info.name;
    const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${searchedTitle}`;

    await fetch(searchApi)
      .then((response) => response.json())
      .then((json) => setCard(json.results));
  };

  return (
    <>
      <Header search={searchMovies} />
      <Cards cardInfo={card} overview={showOverview} />
      {modal && (
        <Overview content={overviewContent} hideOverview={hideOverview} />
      )}
    </>
  );
};

export default App;
