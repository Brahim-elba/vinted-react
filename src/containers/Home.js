import Header from "../components/Header";
import Hero from "../components/Hero";
import Content from "../components/Content";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://brahim-elba-vinted.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="spin-loading">
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="home-page">
      <Header />
      <Hero />
      <Content data={data.offers} />
    </div>
  );
}

export default Home;
