import React from 'react'

import styles from './index.css'

export default class Mobile extends React.PureComponent{
    render(){
        return(
           <div className={styles.mobile}>
               {/* 头部导航 */}
               <div className={styles.top}>
                    <div className={styles.top_mess}>
                        <div className={styles.avatar}></div>
                        <p>湖南的张三，一秒前出价1000元</p>
                    </div>
                    <div className={styles.top_banner}></div>
               </div>

               {/* 活动页面 */}
                <div className={styles.active}>
                    <div className={styles.active_mess}>
                        <div className={styles.limited}></div>
                        <div className={styles.boutique}></div>
                        <div className={styles.coupon}></div>
                    </div>
                    <div className={styles.active_content}>
                        <div className={styles.skillful}></div>
                        <div className={styles.tanabata}></div>
                    </div>
                </div>
           </div> 
        )
    }
}