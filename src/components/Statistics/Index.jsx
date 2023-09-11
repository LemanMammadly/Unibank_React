import React from 'react'
import styles from "./Index.module.css"

const Index = () => {
  return (
    <div className={styles.statistics}>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <h5 className={styles.boxH5}>Nağd kreditlər</h5>
                <p className={styles.boxP}><span className={styles.boxSpan}>16%</span> <br />-dən başlayaraq</p>
                <button className={styles.boxBtn}>Sifariş et</button>
            </div>
            <div className={styles.box}>
                <h5 className={styles.boxH5}>Əmanətlər</h5>
                <p className={styles.boxP}><span className={styles.boxSpan}>11%</span> <br />-dən illik gəlir</p>
                <button className={styles.boxBtn}>Ətraflı</button>
            </div>
            <div className={styles.box}>
                <h5 className={styles.boxH5}>Plastik Kartlar</h5>
                <p className={styles.boxP}><span className={styles.boxSpan}>30%</span> <br />-dək keşbek xidməti</p>
                <button className={styles.boxBtn}>Ətraflı</button>
            </div>
            <div className={styles.box}>
                <h5 className={styles.boxH5}>Kredit kartı</h5>
                <p className={styles.boxP}><span className={styles.boxSpan}>40</span> <br />günədək güzəşt müddəti</p>
                <button className={styles.boxBtn}>Ətraflı</button>
            </div>
        </div>
    </div>
  )
}

export default Index