import "../styles/AboutSection.scss";

export default function AboutSection() {
  return (
    <section className="about__section">
      <div className="about__section--img">
        <img src="about.png" alt="about-image" />
      </div>
      <div className="about__section--content">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
}
