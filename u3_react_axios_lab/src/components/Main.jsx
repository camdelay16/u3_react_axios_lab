import { useState, useEffect } from "react";
import StarshipList from "./StarshipList";
import axios from "axios";
import { BASE_URL } from "../../globals";
import { Route, Routes } from "react-router-dom";

const Main = (props) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(BASE_URL);
      console.log(response.data.results);
      setStarships(response.data.results);
    };
    getStarships();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/starships"
          element={<StarshipList starships={starships} />}
        />
      </Routes>
    </main>
  );
};

export default Main;
