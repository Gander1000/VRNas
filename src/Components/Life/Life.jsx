import scss from "./Life.module.scss";
import Video from "../../assets/Video (4).svg";

function Life() {
  return (
    <section className={scss.Life}>
      <p>HOW TO GET STARTED</p>
      <h1>Bringing Your Virtual Reality <br /> Dreams to Life</h1>
      <img src={Video} alt="" />
      <button>GET STARTED</button>
    </section>
  );
}

export default Life;
