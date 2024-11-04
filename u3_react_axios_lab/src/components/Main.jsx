import { useState, useEffect } from "react";
import Header from "./Header";
import StarshipList from "./StarshipList";
import axios from "axios";
import { BASE_URL } from "../../globals";

const Main = (props) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}`);
      console.log(response.data.results);
      setStarships(response.data.results);
    };
    getStarships();
  }, []);

  return (
    <>
      <Header />
      <StarshipList starships={starships} />
    </>
  );
};

export default Main;
