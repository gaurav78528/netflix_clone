import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieRow from "../MovieRow/MovieRow";
import "./home.css";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const API_KEY = "f5d8f3231be9d7a854244cf34186a7db";
const url = "https://api.themoviedb.org/3";

const fetchMoviesData = async ({ type }) => {
  console.log(type);
  let res = await axios.get(`${url}/movie/${type}?api_key=${API_KEY}`);
  let data = res.data.results;
  //   console.log(data);
  return data;
};

const fetchGenreMoviesData = async () => {
  let res = await axios.get(`${url}/genre/movie/list?api_key=${API_KEY}`);
  let data = res.data.genres;
  // console.log(data);
  return data;
};
const Home = () => {
  const [upcomingMoviesData, setUpcomingmoviesData] = useState([]);
  const [popularMoviesData, setPopularmoviesData] = useState([]);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
  const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState([]);
  const [genre, setGenre] = useState([]);
  // console.log(genre);
  // console.log(popularMoviesData[0].poster_path);

  useEffect(() => {
    fetchMoviesData({ type: "upcoming" }).then((res) =>
      setUpcomingmoviesData(res)
    );
    fetchMoviesData({ type: "popular" }).then((res) =>
      setPopularmoviesData(res)
    );
    fetchMoviesData({ type: "top_rated" }).then((res) =>
      setTopRatedMoviesData(res)
    );
    fetchMoviesData({ type: "now_playing" }).then((res) =>
      setNowPlayingMoviesData(res)
    );
    fetchGenreMoviesData().then((res) => setGenre(res));
  }, []);
  return (
    <div className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMoviesData[0]
            ? `url(https://image.tmdb.org/t/p/w500/${popularMoviesData[0].poster_path})`
            : "rgb(16,16,16)",
        }}
      >
        {popularMoviesData[0] && <h1>{popularMoviesData[0].original_title}</h1>}
        {popularMoviesData[0] && <p>{popularMoviesData[0].overview}</p>}
        <div>
          <button>
            <BiPlay /> Play
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>
      <MovieRow title={"Upcoming Movies"} moviesData={upcomingMoviesData} />
      <MovieRow title={"Popular Movies"} moviesData={popularMoviesData} />
      <MovieRow title={"Top Rated Movies"} moviesData={topRatedMoviesData} />
      <MovieRow
        title={"Now Playing Movies"}
        moviesData={nowPlayingMoviesData}
      />
      <div className="genre-box">
        {genre.map((item) => {
          return (
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* <MovieRow title={"Recently Viewed"} /> */}
      {/* <MovieRow title={"My List"} /> */}
    </div>
  );
};

export default Home;
