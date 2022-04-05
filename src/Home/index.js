import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Hi, this is Ranjith</h1>

      <h2>Projects:</h2>
      <Link to="/movies">Movies</Link>
    </>
  );
}

export default Home;
