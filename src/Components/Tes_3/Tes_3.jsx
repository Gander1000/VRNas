import scss from "./Tes_3.module.scss";
import Image from "../../assets/Image (1).svg";
import mes from "../../assets/1.svg";

function Tes_3() {
  return (
    <section className={scss.Tes_3}>
      <div className={scss.colza}>
        <img className={scss.orb_1} src={mes} alt="" />
        <img className={scss.orb_2} src={mes} alt="" />
        <img className={scss.orb_3} src={mes} alt="" />
        <div className={scss.colza_1}>
          <img className={scss.mes} src={mes} alt="" />
          <img src={Image} alt="" />
        </div>
      </div>
      <div className={scss.contai_title}>
        <p>CONTACT US</p>
        <h1>Get in Touch</h1>
        <span>
          At VRNas, we're always happy to hear from our clients and potential
          clients. Whether you have a question about our VR services, want to
          discuss a potential project, or just want to say hello, we're here to
          help.
        </span>
        <div className={scss.contai_input}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <input type="text" placeholder="Message" />
        <button>send message</button>
      </div>
    </section>
  );
}

export default Tes_3;
