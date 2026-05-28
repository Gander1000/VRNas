import scss from "./Cart.module.scss";
import Title from "../../assets/Title.svg";

function Cart() {
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
    <section className={scss.Cart}>
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

export default Cart;
