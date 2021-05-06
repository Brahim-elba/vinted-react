const ArticleDetails = ({ data }) => {
  return (
    <div className="article-details">
      <div className="article-details-top">
        <p>{data.product_price} €</p>
        <div>
          <div>
            <p>MARQUE</p>
            <p>{data.product_details[2].MARQUE.toUpperCase()}</p>
          </div>
          <div>
            <p>TAILLE</p>
            <p>{data.product_details[3].TAILLE.toUpperCase()}</p>
          </div>
          <div>
            <p>ÉTAT</p>
            <p>{data.product_details[0].ETAT.toUpperCase()}</p>
          </div>
          <div>
            <p>COULEUR</p>
            <p>{data.product_details[4].COULEUR.toUpperCase()}</p>
          </div>
          <div>
            <p>EMPLACEMENT</p>
            <p>{data.product_details[1].EMPLACEMENT.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div className="article-details-bottom">
        <p>{data.product_name}</p>
        <p>{data.product_description}</p>
        <div>
          <p>{data.owner.account.username[0]}</p>
          <p>{data.owner.account.username}</p>
        </div>
      </div>
      <button>Acheter</button>
    </div>
  );
};

export default ArticleDetails;
