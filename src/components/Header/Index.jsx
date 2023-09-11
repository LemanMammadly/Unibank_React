import React from 'react'
import styles from "./Index.module.css"

const Index = () => {
  return (
    <header>
        <div className={styles.topHeader}>
            <div className="top-left-header">
                <img className={styles.logo} src="https://unibank.az/assets/images/logonew-orange1.png" alt="" />
            </div>
            <div className={styles.topCenterHeader}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Xidmət şəbəkəsi</li>
                    <li className={styles.li}>Bank haqqında</li>
                    <li className={styles.li}>Keşbek</li>
                    <li className={styles.li}>Tariflər</li>
                    <li className={styles.li}>İnsan resursları</li>
                    <li className={styles.li}>Bankla əlaqə və təkliflər</li>
                    <li className={styles.li}>F.A.Q</li>
                </ul>
            </div>
            <div className={styles.topRightHeader}>
                <button className={styles.btnActive}>Fərdi</button>
                <button className={styles.btn}>Biznes</button>
                <button className={styles.btnLight}><i class="fa-solid fa-sun"></i></button>
                <button className={styles.btnLang}>ENG</button>
                <button className={styles.btnLang}>RUS</button>
                <button className={styles.btnLang}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className={styles.bottomHeader}>
            <div className="bottom-left-header">
                <ul className={styles.bottomUl}>
                    <li className={styles.li}>Kartlar</li>
                    <li className={styles.li}>Kreditlər</li>
                    <li className={styles.li}>Əmanətlər</li>
                    <li className={styles.li}>Köçürmələr</li>
                    <li className={styles.li}>Rəqəmsal bankçılıq</li>
                    <li className={styles.li}>Əlavə xidmətlər</li>
                </ul>
            </div>
            <div className="bottom-right-header">
                <button className={styles.btnPhone}><i className="fa-solid fa-phone" style={{color:"#FF6400", fontSize:"17px",marginRight:'10px'}}></i>117</button>
            </div>
        </div>
    </header>
  )
}

export default Index