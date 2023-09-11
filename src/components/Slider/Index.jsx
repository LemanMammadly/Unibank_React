import React from "react";
import styles from "./Index.module.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "400px",
  color: "#fff",
  background: "#FF6400",
  borderRadius:"7px"
};

const Index = () => {
  return (
    <div  className={styles.carousel} >
      <Carousel autoplay>
        <div>
        <div className={styles.sliderContent} style={contentStyle}>
          <div className="left-first-slider">
            <img src="https://unibank.az/uploads/banners/1693917765banner-tehsil-iscilerine.png" alt="" />
          </div>
          <div className="right-first-slider">
            <div className="top-slider-first">
                <h2 className={styles.sliderH2}>Təhsil işçilərinə 0% <br /> komissiya!</h2>
            </div>
            <div className="center-slider-first">
                <p className={styles.sliderP}>Sentyabrın 30-dək bütün təhsil işçiləri üçün 0% komissiyalı nağd kredit!</p>
            </div>
            <div className="bottom-slider-first">
                <button className={styles.sliderBtnOrder}>Sifariş et <i class="fa-solid fa-arrow-right-long"></i></button>
                <button className={styles.sliderBtnInfo}>Ətraflı</button>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className={styles.sliderContent} style={contentStyle}>
          <div className="left-first-slider">
            <img src="https://unibank.az/uploads/banners/1693902051banner-topla.png" alt="" />
          </div>
          <div className="right-first-slider">
            <div className="top-slider-first">
                <h2 className={styles.sliderH2}>Arzuların üçün daha çox <br /> topla!</h2>
            </div>
            <div className="center-slider-first">
                <p className={styles.sliderP}>100 000 AZN-dək pul toplamaq və illik 9%-dək gəlir qazanmaq imkanı.</p>
            </div>
            <div className="bottom-slider-first">
                <button className={styles.sliderBtnInfo}>Ətraflı</button>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className={styles.sliderContent} style={contentStyle}>
          <div className="left-first-slider">
            <img src="https://unibank.az/uploads/banners/1682404726kredit-xetti-ac1%20(1).png" alt="" />
          </div>
          <div className="right-first-slider">
            <div className="top-slider-first">
                <h2 className={styles.sliderH2}>Kredit xəttini dərhal aç!</h2>
            </div>
            <div className="center-slider-first">
                <p className={styles.sliderP}>Bunun üçün sadəcə UBank mobil tətbiqində UCard-nı seç və saniyələr <br /> ərzində pul kartına otursun! </p>
            </div>
            <div className="bottom-slider-first">
                <button className={styles.sliderBtnInfo}>Ətraflı</button>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className={styles.sliderContent} style={contentStyle}>
          <div className="left-first-slider">
            <img src="https://unibank.az/uploads/banners/16703977791661845566digerbank.gif" alt="" />
          </div>
          <div className="right-first-slider">
            <div className="top-slider-first">
                <h2 className={styles.sliderH2}>Marketdə hər alış-verişdə <br /> 5% keşbek</h2>
            </div>
            <div className="center-slider-first">
                <p className={styles.sliderP}>Artıq market alış-verişi üçün min. 10 AZN-lik ödənişə ehtiyac yoxdur! <br /> Sadəcə Apple Pay / Google Pay ilə ödə və 5% keşbek qazan!</p>
            </div>
          </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Index;
