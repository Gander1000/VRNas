import scss from "./Cart_2.module.scss";
import software from "../../assets/software.svg";
import BG from "../../assets/Bg.svg";

function Cart_2() {
  const bloc = [
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      image: software,
      h1: "VR Development",
      span: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
  ];
  return (
    <section className={scss.Cart_2}>
      <div className={scss.title}>
        <div className={scss.left_title}>
          <p>OUR SERVICE</p>
          <h1>Our Service</h1>
        </div>
        <span>
          We use the latest VR hardware and software to create high-quality VR
          experiences that are accessible and affordable. Our goal is to provide
          exceptional customer service and support, and our team is always
          available to answer any questions and address any concerns you may
          have.
        </span>
      </div>
      <div className={scss.contai_cart}>
        {bloc.map((item, index) => (
          <div className={`${scss.bloc} ${scss["bloc_" + index]}`} key={index}>
            <img src={item.image} alt="" />
            <h1>{item.h1}</h1>
            <span>{item.span}</span>
            <button>OUR SERVICE</button>
            <img className={scss.bg} src={BG} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_2;
