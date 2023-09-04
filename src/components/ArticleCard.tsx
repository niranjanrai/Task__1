import "../styles/ArticleCard.scss";
import ButtonOutline from "../ui/ButtonOutline";

export default function ArticleCard({ title, img, para }) {
  return (
    <div className="article__card">
      <img src={img} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{para}</p>
        <ButtonOutline />
      </div>
    </div>
  );
}
