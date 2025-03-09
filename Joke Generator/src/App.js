import { useEffect } from "react";
import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook herez
  const { data, loading, error, getJoke } = useFetch(url);

  useEffect(() => {
    getJoke();
  }, [])

  // Display loading text here
  if (loading) {
    return (<p>Loading...</p>)
  }

  // Display something went wrong here
  else if (error) {
    return (<h3>{error}</h3>)
  }


  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      {data && <h2>{data.joke}</h2>}
      <button onClick={getJoke} className="btn" >New Joke</button>
    </div>
  );
}
