import "../styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="contact-us">
        <h3>Contact Us</h3>

        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>

        <p>example2020@gmail.com</p>

        <p>904-1000-102</p>
      </div>
      <div className="more">
        <h3>More</h3>
        <p>About Us</p>
        <p>Products</p>
        <p>Carrier</p>
        <p>Contact us</p>
      </div>
      <div className="social-links">
        <div>
          <h3>Social Links</h3>
          <div>
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillFacebook />
          </div>
        </div>
        <p>
          <AiOutlineCopyrightCircle /> 2022 Food Truck Example
        </p>
      </div>
    </footer>
  );
}
