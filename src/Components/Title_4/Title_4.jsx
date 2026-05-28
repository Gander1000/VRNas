import scss from "./Title_4.module.scss";
import men from "../../assets/Image (6).svg";
import Video from "../../assets/ABOUT US.svg";

function Title_4() {
  return (
    <section className={scss.Title_4}>
      <div className={scss.contai_title}>
        <p>ABOUT US</p>
        <h1>Bringing Your Vision to Life: Learn About VRNas</h1>
        <span>
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
          Our team consists of experienced VR developers, designers, and
          technicians who are passionate about VR and dedicated to delivering
          the highest quality work. We use the latest VR hardware and software
          to create immersive, interactive experiences that are tailored to your
          specific needs. From initial consultation to final delivery, we are
          committed to providing exceptional customer service. Our goal is to
          ensure that you are completely satisfied with every aspect of your VR
          experience.
        </span>
      </div>
      <div className={scss.contai_image}>
        <img src={men} alt="" />
        <img className={scss.video} src={Video} alt="" />
      </div>
    </section>
  );
}

export default Title_4;
