import React from 'react'
import styles from './index.module.css'

const Index = () => {
  return (
    <div className={styles.allAppSecond}>
    <div className={styles.appBarSecond}>
        <div className="left-second">
            <h2 className={styles.appBarSecondH2}>UBank</h2>
            <p className={styles.appBarSecondP}>UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil <br /> tətbiqdir. Ödənişlərini banka gəlmədən, telefonunda bir toxunuşla həyata <br /> keçir! </p>
            <div className={styles.btndiv}>
                <img src="https://unibank.az/assets/images/playstore.svg" alt="" />
                <img src="https://unibank.az/assets/images/appstore.svg" alt="" />
                <img src="https://unibank.az/assets/images/app-gallery.svg" alt="" />
            </div>
            <button className={styles.btnAbout}>Haqqında</button>
        </div>
        <div className="right-second">
            <img src="https://unibank.az/assets/images/appbar2.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Index