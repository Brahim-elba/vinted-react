import ArticleDetails from "./ArticleDetails";

const ContentArticle = ({ data, userToken }) => {
  return (
    <div className="content-offer">
      <img src={data.product_image.secure_url} alt="article-pic" />
      <ArticleDetails data={data} userToken={userToken} />
    </div>
  );
};

export default ContentArticle;
