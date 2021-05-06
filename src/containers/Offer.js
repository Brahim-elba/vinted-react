import { useParams } from "react-router-dom";
import ContentArticle from "../components/ContentOffer";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(id);
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
      <ContentArticle data={data} />
    </div>
  );
};

export default Offer;
