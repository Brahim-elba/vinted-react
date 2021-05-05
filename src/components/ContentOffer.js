import ArticleDetails from "./ArticleDetails";

const ContentArticle = ({ data }) => {
  console.log(data);
  return (
    <div className="content-offer">
      <img src={data.product_image.secure_url} alt="article-pic" />
      <ArticleDetails data={data} />
    </div>
  );
};

export default ContentArticle;
