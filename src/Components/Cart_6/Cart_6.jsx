import scss from "./Cart_6.module.scss";
import Icon from "../../assets/iCON_a.svg";

function Cart_6() {
  const bloc = [
    {
      image: Icon,
      p: "EMAIL",
      span: "Support@VRNas.com",
    },
    {
      image: Icon,
      p: "EMAIL",
      span: "Support@VRNas.com",
    },
    {
      image: Icon,
      p: "EMAIL",
      span: "Support@VRNas.com",
    },
  ];
  return (
    <section className={scss.Cart_6}>
      {bloc.map((item, index) => (
        <div className={scss.cart} key={index}>
          <img src={item.image} alt="" />
          <p>{item.p}</p>
          <span>{item.span}</span>
        </div>
      ))}
    </section>
  );
}

export default Cart_6;
