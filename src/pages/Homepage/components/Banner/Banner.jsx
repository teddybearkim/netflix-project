import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import isLoadingSpinner from "../../../../ui/Spinner/isLoadingSpinner";

const Banner = () => {
  let { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const posterPath = data?.results[0].poster_path;
  const imageUrl = `https://image.tmdb.org/t/p/original${posterPath}`;

  return (
    <>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="banner">
        <div className="text-white banner-text-area">
          <h1 className="banner-title">{data?.results[0].title}</h1>
          <p className="banner-overview">{data?.results[0].overview}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
