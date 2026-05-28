import scss from "./Foter.module.scss";
import { Link } from "react-router-dom";
import Message from "../../assets/Message.svg";
import Message_a from "../../assets/Message_1.svg";
import Send from "../../assets/Send.svg";
import Frame from "../../assets/Frame 22.svg";
import mes from "../../assets/1.svg";
import Calling from "../../assets/Calling.svg";
import Location from "../../assets/Location.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.top_logo}>
        <h1>Subscribe to our newsletter for latest updates</h1>
        <div className={scss.input_email}>
          <img src={Message} alt="" />
          <input type="text" placeholder="Enter your email address" />
          <Link to="">
            <img src={Send} alt="" />
          </Link>
        </div>
      </div>
      <div className={scss.container}>
        <div className={scss.contai_logo}>
          <img src={Frame} alt="" />
          <div className={scss.contai_mes}>
            <img src={mes} alt="" />
            <img src={mes} alt="" />
            <img src={mes} alt="" />
            <img src={mes} alt="" />
          </div>
        </div>
        <div className={scss.contai_Link}>
          <h3>Quicklinks</h3>
          <Link to="/">Home</Link>
          <Link to="">Pricing Plan</Link>
          <Link to="/Service">Service</Link>
          <Link to="/Page">Blog</Link>
          <Link to="/Our_team_Date">Our Team</Link>
        </div>
        <div className={scss.contai_Link}>
          <h3>Support</h3>
          <Link to="/Adout_us">About us</Link>
          <Link to="/Contact_us">Contact us</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/Terms_and_Conditions">Tems & Conditions</Link>
          <Link to="/Privacy_Policy">Privacy Policy</Link>
        </div>
        <div className={scss.contai_Link}>
          <h3>Need Help?</h3>
          <Link to="">
            {" "}
            <img src={Calling} alt="" />
            Tanjung Sari Street no.48, Pontianak City
          </Link>
          <Link to="">
            {" "}
            <img src={Message_a} alt="" />
            Support@VRNas.com
          </Link>
          <Link to="">
            {" "}
            <img src={Location} alt="" />
            +123 456 7890
          </Link>
        </div>
      </div>
      <p>© Copyright 2023, All Rights Reserved</p>
    </section>
  );
}

export default Foter;
