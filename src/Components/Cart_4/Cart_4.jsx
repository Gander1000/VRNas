import scss from "./Cart_4.module.scss";
import men from "../../assets/OUR TEAM.svg";

function Cart_4() {
  const bloc = [
    {
      image: men,
    },
    {
      image: men,
    },
    {
      image: men,
    },
    {
      image: men,
    },
  ];
  return (
    <section className={scss.Cart_4}>
      <p>OUR TEAM</p>
      <div className={scss.contai_top}>
        <h1>Our Professionals Team</h1>
        <button>see all</button>
      </div>
      <div className={scss.contai_cart}>
        {bloc.map((item, index) => (
          <div className={scss.bloc} key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_4;
