import React from "react";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <div className={styles.frontNews}>
      <div className="topNews">
        <div className={styles.boxesNew}>
          <div className={styles.boxNew}>
            <a href="/" className={styles.boxNewA}>
              Unibank KB ASC Cloudflare Enterprise domeninin lisenziya
              uzadılması ilə bağlı kotirovka elan edir.
            </a>
            <p className={styles.boxNewP}>
              Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və
              möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun
              adına göndərməlidirlər.
            </p>
            <span className={styles.boxNewSpan}>05.09.2023</span>
          </div>
          <div className={styles.boxNew}>
            <a href="/" className={styles.boxNewA}>
              Unibank KB ASC Cloudflare Enterprise domeninin lisenziya
              uzadılması ilə bağlı kotirovka elan edir.
            </a>
            <p className={styles.boxNewP}>
              Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və
              möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun
              adına göndərməlidirlər.
            </p>
            <span className={styles.boxNewSpan}>05.09.2023</span>
          </div>
          <div className={styles.boxNew}>
            <a href="/" className={styles.boxNewA}>
              Unibank KB ASC Cloudflare Enterprise domeninin lisenziya
              uzadılması ilə bağlı kotirovka elan edir.
            </a>
            <p className={styles.boxNewP}>
              Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və
              möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun
              adına göndərməlidirlər.
            </p>
            <span className={styles.boxNewSpan}>05.09.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomNews}>
        <button className={styles.newsBtn}>Bütün Xəbərlər</button>
      </div>
    </div>
  );
};

export default Index;
