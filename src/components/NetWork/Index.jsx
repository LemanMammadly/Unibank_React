import React from "react";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className={styles.netWork}>
      <div className={styles.leftNetwork}>
        <div className={styles.leftLeftNetwork}>
          <h2 className={styles.leftNetH2}>
            Xidmət <br /> Şəbəkəsi
          </h2>
          <p className={styles.leftNetP}>
            Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər
            məlumatlar haqqında ətraflı.{" "}
          </p>
          <button className={styles.leftNetBtn}>Daha Ətraflı</button>
        </div>
        <div className="rightLeftNetwork">
          <img src="https://unibank.az/assets/images/Bitmap.png" alt="" />
        </div>
      </div>
      <div className={styles.rightNetwork}>
        <div className={styles.rightLeftNetwork}>
          <h2 className={styles.leftNetH2}>
            Sualın Var? <br /> Bizimlə əlaqə saxla!
          </h2>
          <p className={styles.leftNetP}>
            Onlayn-məsləhətçi, 117 Çağrı mərkəzi <br /> və ya bank filiallarına
            müraciət et və <br /> suallarına cavab al. Rahat və asan!
          </p>
          <button style={{marginTop:"10px"}} className={styles.leftNetBtn}>Daha Ətraflı</button> 
        </div>
      </div>
    </div>
  );
};

export default Index;
