// Tools
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = ({ valueRange, statusSwitch, valueInputSearch, userToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let urlRequestOffers = "https://brahim-elba-vinted.herokuapp.com/offers?";
  if (statusSwitch) {
    urlRequestOffers += `sort=price-asc`;
  } else if (!statusSwitch) {
    urlRequestOffers += `sort=price-desc`;
  }

  if (valueRange.length > 0) {
    urlRequestOffers += `&priceMin=${valueRange[0]}&priceMax=${valueRange[1]}`;
  }

  if (valueInputSearch) {
    urlRequestOffers += `&title=${valueInputSearch}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlRequestOffers);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [valueRange, urlRequestOffers, valueInputSearch]);

  return isLoading ? (
    <div className="spin-loading">
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="home-page">
      <Hero userToken={userToken} />
      <Content data={data.offers} />
    </div>
  );
};

export default Home;
