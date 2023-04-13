import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("ejemplo");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(false);

  const API_KEY = "a6581d6a";
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&S=${inputText}`;

  useEffect(() => {
    try {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setMovieData(data.Search));
    } catch (error) {
      console.log(error);
    }
  }, [inputText]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setInputText(text);
  };

  console.log(movieData);

  return (
    <div className="App">
      <main>
        <form action="" onSubmit={handleForm}>
          <h1>Movie Finder</h1>
          <label htmlFor="input">Busca tu pelicula</label>
          <input
            type="input"
            name=""
            id=""
            placeholder="Avengers"
            onChange={handleChange}
          />
          <button>Buscar</button>
        </form>

        <h3>MOSTRAR DATOS</h3>
        <div className="probar">
          {movieData ? (
            movieData.map((movie) => {
              return (
                <ul key={movie.imdbID} className="movie-list">
                  <li className="grid-example">
                    <p>{movie.Title}</p>
                    <p>Fecha {movie.Year}</p>

                    {movie.Poster === "N/A" ? (
                      <img
                        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
                        alt=""
                      />
                    ) : (
                      <img src={movie.Poster} alt="" />
                    )}
                  </li>
                </ul>
              );
            })
          ) : (
            <p>Nothing found try another movie</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
