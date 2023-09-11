import React from "react";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className={styles.appbar}>
     <div className={styles.allBar}>
     <div className="appbarLeft">
        <img src="https://unibank.az/assets/static/Ucard/ucard.webp" alt="" />
      </div>
      <div className={styles.appbarRight}>
        <div className="topRight">
          <h2 className={styles.barH2}>Sənin kartın - UCarddır!</h2>
        </div>
        <div className="centerRight">
          <p className={styles.barP}>
            Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla
            alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz kredit xətti,
            30%-dək keşbek və illik 6%-dək gəlir əldə etmək imkanı verir. Bir
            sözlə, bütün ehtiyaclar tək kartda!
          </p>
        </div>
        <div className={styles.bottomRight}>
            <button className={styles.btnBarActive}>Ətraflı</button>
            <button className={styles.btnBar}>Partnyorlar</button>
            <button className={styles.btnBar}>Şəxsi kabinet</button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Index;
