import scss from "./Carta.module.scss";
import Maps from "../../assets/Maps.svg";

function Carta() {
  return (
    <section className={scss.Carta}>
      <img src={Maps} alt="" />
    </section>
  );
}

export default Carta;
