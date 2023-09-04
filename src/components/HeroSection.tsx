import "../styles/HeroSection.scss";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="hero__section--container">
      <div className="hero__section--content">
        <img src="Logo.png" alt="logo" />
        <div className="hero__section--cont">
          <h1>
            Discover the <span> Best </span> Food and Drinks
          </h1>
          <p>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button>Explore Now!</Button>
        </div>
      </div>
      <div className="hero__section-figure">
        <img src="Vector 1.png" alt="Pizza-image" />
      </div>
    </section>
  );
}
