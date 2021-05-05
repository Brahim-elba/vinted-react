import Article from "./Article";

const Content = ({ data }) => {
  return (
    <div className="content-home container">
      {data.map((elem) => {
        return <Article articleData={elem} key={elem._id} />;
      })}
    </div>
  );
};

export default Content;
