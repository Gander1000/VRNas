import scss from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import vr from "../../assets/14.svg";
import men from "../../assets/2.svg";
import vector from "../../assets/Vector (2).svg";

function Slider() {
  const swiperRef = useRef(null);
  const cart = [
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
    {
      iamge: vr,
      p: "VR Education",
      span: "The Future of Education: How VR is Revolutionizing the Classroom",
    },
  ];

  return (
    <section className={scss.Slider}>
      <div className={scss.title_top}>
        <div className={scss.logo_title}>
          <p>OUR ARTICLES</p>
          <h1>Stay Up-to-Date with Our VR Insights</h1>
        </div>
        <button>see all</button>
      </div>

      <div className={scss.container}>
        <div className={scss.swiper}>
          <h1>Popular Article</h1>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <img src={vector} alt="" />
          </button>
          <Swiper
            className={scss.contai_swiper}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide className={scss.Sw}>
              <img src={men} alt="" />
              <div className={scss.title_sw}>
                <p>VR Games</p>
                <h1>
                  Entertainment Goes Virtual: The <br /> Rise of VR Gaming
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className={scss.Sw}>
              <img src={men} alt="" />
              <div className={scss.title_sw}>
                <p>VR Games</p>
                <h1>
                  Entertainment Goes Virtual: The <br /> Rise of VR Gaming
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className={scss.Sw}>
              <img src={men} alt="" />
              <div className={scss.title_sw}>
                <p>VR Games</p>
                <h1>
                  Entertainment Goes Virtual: The <br /> Rise of VR Gaming
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className={scss.Sw}>
              <img src={men} alt="" />
              <div className={scss.title_sw}>
                <p>VR Games</p>
                <h1>
                  Entertainment Goes Virtual: The <br /> Rise of VR Gaming
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={scss.contai}>
          <h1>Recent Article</h1>
          <div className={scss.contai_cart}>
            {cart.map((item, index) => (
              <div key={index} className={scss.cart}>
                <img src={item.iamge} alt="" />
                <div className={scss.cart_title}>
                  <p>{item.p}</p>
                  <span>{item.span}</span>
                </div>
                <button>
                  <img src={vector} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
