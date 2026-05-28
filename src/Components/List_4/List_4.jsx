import scss from "./List_4.module.scss";
import men from "../../assets/menx2.svg";

function List_4() {
  const title = [
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
    {
      p: "Acceptance of Term",
      span: "By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.",
    },
  ];
  return (
    <section className={scss.List_4}>
      <img className={scss.men} src={men} alt="" />
      <p>Privacy Policy</p>
      <h1>Privacy Policy</h1>
      <span>
        This Privacy Policy describes how [Company Name] collects, uses, and
        protects the <br /> personal information of our website visitors and customers.
      </span>
      <div className={scss.contai_title}>
        {title.map((item, index) => (
          <div key={index} className={scss.title}>
            <h4>{item.p}</h4>
            <span>{item.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List_4;
