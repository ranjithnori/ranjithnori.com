import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
