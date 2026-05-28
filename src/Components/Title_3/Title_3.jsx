import scss from "./Title_3.module.scss";
import Icon from "../../assets/Icon.svg";

function Title_3() {
  const bloc = [
    {
      image: Icon,
      h4: "Customizable Packages",
      span: "We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.",
    },
    {
      image: Icon,
      h4: "Customizable Packages",
      span: "We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.",
    },
    {
      image: Icon,
      h4: "Customizable Packages",
      span: "We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.",
    },
  ];
  return (
    <section className={scss.Title_3}>
      <p>our pricing</p>
      <h1>Affordable VR Services for Everyone</h1>
      <span>
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's <br /> why we offer a range of pricing options to meet the
        needs of any budget.
      </span>
      <div className={scss.contai_bloc}>
        <div className={scss.contai}>
          {bloc.map((item, index) => (
            <div className={scss.bloc} key={index}>
              <img src={item.image} alt="" />
              <div className={scss.contai_top}>
                <h4>{item.h4}</h4>
                <span>{item.span}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={scss.price}>
        <h5>Start from</h5>
        <h1>$99</h1>
        <button>get started</button>
        <h6>30 Days Moneyback Guarantee</h6>
      </div>
    </section>
  );
}

export default Title_3;
