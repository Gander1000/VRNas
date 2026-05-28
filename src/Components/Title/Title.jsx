import scss from "./Title.module.scss";
import check from "../../assets/check-box.svg";
import men from "../../assets/image_men.svg";
import video from "../../assets/Video 2.svg";

function Title() {
  return (
    <section className={scss.Title}>
      <div className={scss.contai_image}>
        <img src={men} alt="" />
        <img className={scss.video} src={video} alt="" />
      </div>
      <div className={scss.contai_title}>
        <p>ABOUT US</p>
        <h1>
          Bring your events to life like never before with our VR services.
        </h1>
        <span>
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </span>
        <div className={scss.contai_h4}>
          <h4>
            {" "}
            <img src={check} alt="" />
            Cutting-Edge Technology
          </h4>
          <h4>
            {" "}
            <img src={check} alt="" />
            Versatile Applications
          </h4>
          <h4>
            {" "}
            <img src={check} alt="" />
            Affordable and Accessible
          </h4>
        </div>
        <button>READ MORE</button>
      </div>
    </section>
  );
}

export default Title;
