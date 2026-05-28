import scss from "./Cart_3.module.scss";
import Title from "../../assets/Title.svg";

function Cart_3() {
  const bloc = [
    {
      image: Title,
      h1: "Expertise",
      span: "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service",
    },
    {
      image: Title,
      h1: "Expertise",
      span: "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service",
    },
    {
      image: Title,
      h1: "Expertise",
      span: "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service",
    },
  ];
  return (
    <section className={scss.Cart_3}>
      <p>WHY CHOOSE US</p>
      <h1>Empowering Your Virtual <br /> Reality Experience</h1>
      <div className={scss.contai_cart}>
        {bloc.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <img src={item.image} alt="" />
            <h1>{item.h1}</h1>
            <span>{item.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_3;
