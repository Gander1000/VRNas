import scss from "./List.module.scss";
import Vector from "../../assets/Vector.svg";
import Vector_a from "../../assets/Vector (1).svg";
import { useState } from "react";

function List() {
  const [openIndex, setOpenIndex] = useState(null);
  const menu = [
    {
      h1: "What is virtual reality?",
      span: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
    {
      h1: "What is virtual reality?",
      span: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
    {
      h1: "What is virtual reality?",
      span: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
    {
      h1: "What is virtual reality?",
      span: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
    {
      h1: "What is virtual reality?",
      span: "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
  ];
  return (
    <section className={scss.List}>
      <p>FAQ</p>
      <h1>Frequently Asked Questions</h1>
      <span>
        At VRNas, we want to make sure that you have all the information you
        need to make informed decisions <br /> about our VR services. Here are some of
        the most common questions we receive:
      </span>
      <div className={scss.contai_list}>
        {menu.map((item, index) => (
          <div key={index} className={`${scss.menu} ${openIndex === index ? scss.active : ""}`}>
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
    </section>
  );
}

export default List;
