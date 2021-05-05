import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Article = ({ articleData }) => {
  return (
    <Link className="article" to={`/offer/${articleData._id}`}>
      <div className="header-article">
        <img src={articleData.owner.account.avatar} alt="article" />
        <p>{articleData.owner.account.username}</p>
      </div>
      <img src={articleData.product_image.secure_url} alt="article-url" />
      <div className="infos-article">
        <div>
          <p>{articleData.product_price} €</p>
          <div>
            <FontAwesomeIcon icon="heart" />
            <p>6</p>
          </div>
        </div>
        <p>{articleData.product_details[3].TAILLE}</p>
        <p>{articleData.product_details[2].MARQUE}</p>
      </div>
    </Link>
  );
};

export default Article;
