import scss from "./Tes_2.module.scss";
import Logo from "../../assets/Logo.svg";
import men from "../../assets/Image (5).svg";

function Tes_2() {
  return (
    <section className={scss.Tes_2}>
      <p>Our Trusted Partners</p>
      <h1>Discover the Companies We Work With</h1>
      <div className={scss.colza}>
        <div className={scss.colza_1}>
          <div className={scss.logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_1}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_2}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_3}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_4}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_5}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.logo_6}>
            <img src={Logo} alt="" />
          </div>
          <div className={scss.colza_2}>
            <div className={scss.colza_3}>
              <img src={men} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tes_2;
