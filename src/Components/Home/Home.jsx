import { Link } from "react-router-dom";
import scss from "./Home.module.scss";
import Ellipse from "../../assets/Ellipse 36.svg";
import Video from "../../assets/Video.svg";
import image from "../../assets/Image.svg"

function Home() {
  return (
    <section className={scss.Home}>
      <div className={scss.title}>
        <h1>Immerse Yourself in Virtual Reality</h1>
        <span>
          Experience Unforgettable Events in VR. Bring your events to <br /> life like
          never before with our VR services
        </span>

        <Link to="">DISCOVER MORE</Link>

        <div className={scss.contai_vir}>
          <div className={scss.vr}>
            <div className={scss.men}>
              <img src={Ellipse} alt="" />
              <img src={Ellipse} alt="" />
              <img src={Ellipse} alt="" />
            </div>
            <p>
              <span>32k+</span>Happy Client
            </p>
          </div>
          <img className={scss.video} src={Video} alt="" />
        </div>
      </div>
      <img className={scss.men} src={image} alt="" />
      <div className={scss.contai_mob_img}>
        <img className={scss.video_mob} src={Video} alt="" />
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default Home;
