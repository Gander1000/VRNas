import scss from "./Price.module.scss";

function Price () {
    const zh = [
      {
        p: "HAPPY CLIENTS",
        h1: "123k+",
      },
      {
        p: "HAPPY CLIENTS",
        h1: "123k+",
      },
      {
        p: "HAPPY CLIENTS",
        h1: "123k+",
      },
    ];
    return(
        <section className={scss.Price}>
            {zh.map((item, index) => (
                <div className={scss.cart} key={index}>
                    <p>{item.p}</p>
                    <h1>{item.h1}</h1>
                </div>
            ))}
        </section>
    );
}

export default Price