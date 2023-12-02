import { useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  let [data, setData] = useState({});

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = async (event) => {
		event.preventDefault(); // don't refresh the page

		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=2231b390&t=${input}`
			);
			const data = await response.json();

			setData(data);

		} catch (error) {
			console.error(error);
		}
  };

  

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {data && 
        <section>
          <h1>{data.Title}</h1>
          <h2>{data.Year}</h2>
          <img src={data.Poster} alt="" />
          <p>{data.Ratings[0].Value}</p>
        </section>
        }
      <input type="text" value={input} onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </section>
  )
}

export default App;