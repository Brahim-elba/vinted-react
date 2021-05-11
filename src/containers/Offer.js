// Tools
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import ContentOffer from "../components/ContentOffer";

const Offer = ({ userToken }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://brahim-elba-vinted.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="spin-loading">
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="offer-page">
      <ContentOffer data={data} userToken={userToken} />
    </div>
  );
};

export default Offer;
