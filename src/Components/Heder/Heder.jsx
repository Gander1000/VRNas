import scss from "./Heder.module.scss";
import Frame from "../../assets/Frame 22.svg";
import { Link } from "react-router-dom";
import expand from "../../assets/expand.svg";
import { useState } from "react";

const Heder = () => {
  const [active, setActive] = useState(false);
  return (
    <section className={scss.Heder}>
      <div className={scss.container}>
        <Link to="/">
          <img src={Frame} alt="" />
        </Link>

        <div className={scss.contai_a}>
          <Link to="/">Home</Link>
          <Link to="/Adout_us">About us</Link>
          <Link to="/Service">Service</Link>
          <Link to="/Page">
            Page <img src={expand} alt="" />
          </Link>
          <Link to="/Blog">
            Blog <img src={expand} alt="" />
          </Link>
        </div>
        <Link to="">
          <button>Contact us</button>
        </Link>
      </div>
      <div className={scss.container_mob}>
        <img src={Frame} alt="" />
        <div onClick={() => setActive(!active)} className={scss.menu}>
          <p>M</p>
        </div>
        {active && (
          <div className={scss.bottom_menu}>
            <img
              onClick={() => setActive(!active)}
              className={scss.cansel}
              src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/1200/external-Cross-Mark-interface-glyph-silhouettes-icons-papa-vector.jpg"
              alt=""
            />
            <div className={scss.contai_a_mob}>
              <Link to="/">Home</Link>
              <Link to="/Adout_us">About us</Link>
              <Link to="/Service">Service</Link>
              <Link to="/Page">
                Page <img src={expand} alt="" />
              </Link>
              <Link to="/Blog">
                Blog <img src={expand} alt="" />
              </Link>
            </div>
            <Link to="">
              <button>Contact us</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Heder;
