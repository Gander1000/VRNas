import scss from "./Cart_5.module.scss";
import icon from "../../assets/Icon+-.svg";

function Cart_5() {
  const cart = [
    {
      p: "Basic Plan",
      h1: "$99",
      h1_span: "/ month",
      span: "All the basic features to boost your freelance career",
      span_contai: [
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
      ],
      button: "Get 14 Days Free Trial",
    },
    {
      p: "Basic Plan",
      h1: "$99",
      h1_span: "/ month",
      span: "All the basic features to boost your freelance career",
      span_contai: [
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
      ],
      button: "Get 14 Days Free Trial",
    },
    {
      p: "Basic Plan",
      h1: "$99",
      h1_span: "/ month",
      span: "All the basic features to boost your freelance career",
      span_contai: [
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
        {
          image: icon,
          span_min: "Access to a selection of VR games and experiences",
        },
      ],
      button: "Get 14 Days Free Trial",
    },
  ];
  return (
    <section className={scss.Cart_5}>
      <p className={scss.top_p}>PRICING</p>
      <h1 className={scss.top_h1}>Pricing Plans</h1>
      <span className={scss.top_span}>
        Choose the pricing plan that fits your needs and budget. All plans come
        with a free trial period so you <br /> can test out our service and see which
        plan works best for you.
      </span>
      <div className={scss.contai_cart}>
        {cart.map((item, index) => (
          <div className={scss.cart} key={index}>
            <p>{item.p}</p>
            <h1>
              {item.h1}
              <span>{item.h1_span}</span>
            </h1>
            <span>{item.span}</span>
            <div className={scss.contai_span}>
              {item.span_contai.map((el, id) => (
                <span key={id}>
                  <img src={el.image} alt="" />
                  {el.span_min}
                </span>
              ))}
            </div>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cart_5;
