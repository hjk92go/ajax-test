import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");

  const list = async () => {
    const listJson = await //대기요청

    (
      await fetch(
        //response의 역할(언제까지 대기요청인지)
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&&search=${movie}`
      )
    ).json();
    setData(listJson.data.movies);
  };

  useEffect(() => {
    list();
  }, []);
  console.log(movie);

  // function async lists() {
  //   return()
  // }
  const searchMovie = (e) => {
    setMovie(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>영화리스트</h1>
        {data.map((movies) => (
          <div>
            <div>{movies.title}</div>
            <img
              src={movies.background_image}
              style={{
                width: "100px",
              }}
            ></img>
          </div>
        ))}
      </header>
      <input type="search" onChange={searchMovie} />
    </div>
  );
}

export default App;
