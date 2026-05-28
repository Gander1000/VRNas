import scss from "./Tes.module.scss";
import men from "../../assets/Image (3).svg";
import men_border from "../../assets/Image (4).svg";

function Tes() {
  return (
    <section className={scss.Tes}>
      <div className={scss.title}>
        <p>TESTIMONIAL</p>
        <h1>What Our Clients Are Saying</h1>
      </div>
      <div className={scss.colza}>
        <div className={scss.profil}>
          <img className={scss.men} src={men_border} alt="" />
          <div className={scss.colza_title}>
            <span>
              The team was professional, responsive, and <br /> a pleasure to
              work with. We highly recommend <br /> VRNas for any VR needs.
            </span>
            <h5>
              <span>Robert Fox</span>- CEO Anono
            </h5>
          </div>
        </div>
        <div className={scss.colza_1}>
          <div className={scss.profil_1}>
            <img className={scss.men} src={men_border} alt="" />
            <div className={scss.colza_title}>
              <span>
                The team was professional, responsive, and <br /> a pleasure to
                work with. We highly recommend <br /> VRNas for any VR needs.
              </span>
              <h5>
                <span>Robert Fox</span>- CEO Anono
              </h5>
            </div>
          </div>
          <div className={scss.colza_2}>
            <div className={scss.profil_2}>
              <img className={scss.men} src={men_border} alt="" />
              <div className={scss.colza_title}>
                <span>
                  The team was professional, responsive, and <br /> a pleasure
                  to work with. We highly recommend <br /> VRNas for any VR
                  needs.
                </span>
                <h5>
                  <span>Robert Fox</span>- CEO Anono
                </h5>
              </div>
            </div>
            <div className={scss.colza_3}>
              <div className={scss.profil_3}>
                <img className={scss.men} src={men_border} alt="" />
                <div className={scss.colza_title}>
                  <span>
                    The team was professional, responsive, and <br /> a pleasure
                    to work with. We highly recommend <br /> VRNas for any VR
                    needs.
                  </span>
                  <h5>
                    <span>Robert Fox</span>- CEO Anono
                  </h5>
                </div>
              </div>
              <div className={scss.colza_4}>
                <img src={men} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tes;
