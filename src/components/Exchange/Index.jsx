import React from 'react'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.exchange}>
       <div className={styles.alltable}>
       <h2 className={styles.tableH2}>Valyuta Məzənnələri</h2>
       <div className={styles.allTableRow}>
       <div className={styles.boxTable}>
            <h5 className={styles.tableH5}>Nağd</h5>
            <p className={styles.tableSpan}>Yeniləndi 11.09.2023</p>
            <table>
                <thead>
                    <tr className={styles.tableSpan}>
                        <th className={styles.tableHead}>Valyuta</th>
                        <th className={styles.tableHead}>Alış</th>
                        <th className={styles.tableHead}>Satış</th>
                        <hr />
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className={styles.tableContent}>USD</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>EUR</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>RUB</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>GBP</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.boxTable}>
            <h5 className={styles.tableH5}>Nağdsız</h5>
            <p className={styles.tableSpan}>Yeniləndi 11.09.2023</p>
            <table>
                <thead>
                    <tr className={styles.tableSpan}>
                        <th className={styles.tableHead}>Valyuta</th>
                        <th className={styles.tableHead}>Alış</th>
                        <th className={styles.tableHead}>Satış</th>
                        <hr />
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className={styles.tableContent}>USD</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>EUR</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>RUB</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>GBP</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.boxTable}>
            <h5 className={styles.tableH5}>Kart</h5>
            <p className={styles.tableSpan}>Yeniləndi 11.09.2023</p>
            <table>
                <thead>
                    <tr className={styles.tableSpan}>
                        <th className={styles.tableHead}>Valyuta</th>
                        <th className={styles.tableHead}>Alış</th>
                        <th className={styles.tableHead}>Satış</th>
                        <hr />
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className={styles.tableContent}>USD</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>EUR</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>RUB</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                    <tr>
                        <td className={styles.tableContent}>GBP</td>
                        <td className={styles.tableContent}>1.6940 <i class="fa-solid fa-chevron-down"></i></td>
                        <td className={styles.tableContent}>1.7005 <i class="fa-solid fa-chevron-down"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
       </div>
       <div className={styles.bottomExchange}>
            <div className="leftbottomExhange">
                <h5 className={styles.bottomH5}>Valyuta kalkulyatoru</h5>
                <span className={styles.bottomSpan}>Nağd məzənnə əsasında hesablanır</span>
            </div>
            <div className={styles.righttbottomExhange}>
                <div className={styles.usd}>
                    <div className={styles.leftUsd}>0</div>
                    <div className={styles.rightUsd}>
                        <img className={styles.usdImage} src="https://unibank.az/assets/images/usd.png" alt="" />
                        <span>USD <i style={{color:'#b1b1b1',fontSize:'12px',marginLeft:'10px'}} class="fa-solid fa-angle-down"></i></span>
                    </div>
                </div>
                <i style={{color:"#ff6400"}} class="fa-solid fa-arrow-right-long"></i>
                <div className={styles.usd}>
                <div className={styles.leftUsd}>0</div>
                    <div className={styles.rightUsd}>
                        <img className={styles.usdImage} src="https://unibank.az/assets/images/azn.png" alt="" />
                        <span>AZN <i style={{color:'#b1b1b1',fontSize:'12px',marginLeft:'10px'}} class="fa-solid fa-angle-down"></i></span>
                    </div>
                </div>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Index