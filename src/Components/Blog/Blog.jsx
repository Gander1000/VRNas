import scss from "./Blog.module.scss";
import men from "../../assets/2.svg";

function Blog() {
  const cart = [
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
    {
      image: men,
      p: "VR Games",
      span: "Entertainment Goes Virtual: The Rise of VR Gaming",
      a: "read more",
    },
  ];
  return (
    <section className={scss.Blog}>
      <div className={scss.contai_cart}>
        {cart.map((item, index) => (
          <div className={scss.cart} key={index}>
            <img src={item.image} alt="" />
            <div className={scss.contai_title}>
              <p>{item.p}</p>
              <span>{item.span}</span>
              <a href="">{item.a}</a>
            </div>
          </div>
        ))}
      </div>
      <div className={scss.vtf}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </section>
  );
}

export default Blog;
