import React from "react";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <footer>
      <div className={styles.topFooter}>
        <div className="first">
          <h5 className={styles.firstH5}>Kartlar</h5>
          <ul className={styles.firstUl}>
            <li>Kartlar</li>
            <li>Debet kartlar</li>
            <li>Digər</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Kreditlər</h5>
          <ul className={styles.firstUl}>
            <li>Nağd</li>
            <li>Mikro</li>
            <li>İpoteka</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Əmanətlər</h5>
          <ul className={styles.firstUl}>
            <li>Müddətli</li>
            <li>Proqressiv</li>
            <li>Yığım</li>
            <li>Faizlər əvvəlcədən</li>
            <li>Topla</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Köçürmələr</h5>
          <ul className={styles.firstUl}>
            <li>Ölkədaxili</li>
            <li>Ölkəxarici</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Rəqəmsal Bankçılıq</h5>
          <ul className={styles.firstUl}>
            <li>UBank</li>
            <li>Şəxsi Kabinet</li>
            <li>Unimiles şəxsi kabinet</li>
            <li>Onlayn kredit ödənişi</li>
            <li>Onlayn kredit müraciəti</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Əlavə xidmətlər</h5>
          <ul className={styles.firstUl}>
            <li>Hesablaşma-kassa xidməti</li>
            <li>POS terminal / Smart kassa</li>
            <li>Depozit qutuları</li>
            <li>Onlayn ticarət (eCommerce)</li>
          </ul>
        </div>
        <div className="first">
          <h5 className={styles.firstH5}>Bank haqqında</h5>
          <ul className={styles.firstUl}>
            <li>Rəhbərlik</li>
            <li>Müxbir hesablar</li>
            <li>Təklif və Şikayətlər</li>
            <li>İnsan resursları</li>
            <li>Hesabatlar</li>
            <li>Digər sənədlər</li>
          </ul>
        </div>
      </div>
      <div className={styles.centerFooter}>
        <i class="fa-brands fa-apple"></i>
        <i class="fa-brands fa-android"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
      </div>
      <hr className={styles.hr} />
      <div className={styles.bottomFooter}>
        <div className={styles.leftBottomFooter}>
          <span>© 2023, Unibank - Sənin Bankın</span>
          <p>
            Unibank Azərbaycan Respublikası Mərkəzi Bankının 73 saylı 14 dekabr
            2010-cu il tarixli lisenziyası əsasında fəaliyyət göstərir. <br /> Bütün
            hüquqlar qorunur.
          </p>
        </div>
        <div className={styles.righttBottomFooter}>
            <img className={styles.footerImg} src="https://unibank.az/assets/images/adif.png" alt="" />
            <img className={styles.footerImg} src="https://www.e-gov.az/ContentNew/assets/logo_1u4IDU.svg" alt="" />
            <img className={styles.footerImg} src="https://unibank.az/assets/images/infobank.png?v4" alt="" />
            <img className={styles.footerImg} src="https://unibank.az/assets/images/msp.png?v5" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Index;
