import scss from "./Title_5.module.scss";
import Vector from "../../assets/Vector.svg";
import Vector_a from "../../assets/Vector (1).svg";
import { useState } from "react";
import men from "../../assets/Image (7).svg";
import Video from "../../assets/Group 15.svg";

function Title_5() {
  const [openIndex, setOpenIndex] = useState(null);
  const title = [
    {
      h1: "Passionate and Experienced Team",
      span: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.",
    },
    {
      h1: "Passionate and Experienced Team",
      span: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.",
    },
    {
      h1: "Passionate and Experienced Team",
      span: "We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.",
    },
  ];
  return (
    <section className={scss.Title_5}>
      <div className={scss.contai_image}>
        <img src={men} alt="" />
        <img className={scss.video} src={Video} alt="" />
      </div>
      <div className={scss.contai_title}>
        <p>WHY CHOOSE US</p>
        <h1>Why Choose Us for Your VR Needs</h1>
        <div className={scss.contai_menu}>
          {title.map((item, index) => (
            <div className={scss.text} key={index}>
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={scss.top}
              >
                <h1>{item.h1}</h1>
                <img src={openIndex === index ? Vector_a : Vector} alt="" />
              </div>
              {openIndex === index && <span>{item.span}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Title_5;
