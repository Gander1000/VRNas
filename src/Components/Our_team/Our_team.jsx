import scss from "./Our_team.module.scss";
import men from "../../assets/OUR TEAM.svg";
import men_a from "../../assets/OUR TEAM_2.svg";
import { useState } from "react";

function Our_team() {
  const [img, setImg] = useState(null);
  const cart = [
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
    {
      image: men,
    },
    {
      image: men,
    },
  ];
  return (
    <section className={scss.Our_team}>
      <p>OUR TEAM</p>
      <h1>Meet Our Amazing Team</h1>
      <div className={scss.contai_cart}>
        {cart.map((item, index) => (
          <div className={scss.cart}>
            <img
              src={img === index ? men_a : men}
              onMouseEnter={() => setImg(index)}
              onMouseLeave={() => setImg(null)}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Our_team;
