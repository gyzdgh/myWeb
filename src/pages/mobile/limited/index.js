import React from 'react'

import styles from './index.css'

export default class Mobile extends React.PureComponent {
    render() {
        return (
            <div className={styles.limited}>
                {/* 头部导航 */}
                <div className={styles.top}>
                    <div className={styles.top_mess}>
                        <div className={styles.avatar}></div>
                        <p>湖南的张三，一秒前出价100元</p>
                    </div>
                    <div className={styles.top_banner}></div>
                </div>

                {/* 倒计时 */}
                <div className={styles.countdown}>
                    <div className={styles.current}>
                        <div className={styles.countdown_time}>10:00</div>
                        <div className={styles.countdown_mess}>进行中</div>
                    </div>
                    <div>
                        <div className={styles.countdown_time}>10:20</div>
                        <div className={styles.countdown_mess}>即将开始</div>
                    </div>
                    <div>
                        <div className={styles.countdown_time}>10:30</div>
                        <div className={styles.countdown_mess}>即将开始</div>
                    </div>
                    <div>
                        <div className={styles.countdown_time}>10:40</div>
                        <div className={styles.countdown_mess}>即将开始</div>
                    </div>
                    <div>
                        <div className={styles.countdown_time}>10:50</div>
                        <div className={styles.countdown_mess}>即将开始</div>
                    </div>
                </div>

                {/* 抢购内容 */}
                <div className={styles.panic}>
                    {/* 抢购内容top */}
                    <div className={styles.panic_top}>
                        <div className={styles.panic_title}></div>
                        <div className={styles.panic_countdown}>
                            <div className={styles.clock}></div>
                            <div className={styles.clock_time}>距结束<a>09</a>:<a>09</a>:<a>09</a></div>
                        </div>
                    </div>
                    {/* 抢购内容列表 */}
                    <div className={styles.panic_list}>
                        <div className={styles.list_content}>
                            <div className={styles.list_pic}></div>
                            <div className={styles.list_mess}>
                                <div className={styles.list_messTitle}>
                                    <a href="#">老挝山料印章</a>
                                    <span>任意挑选 私信备注</span>
                                </div>
                                <div className={styles.list_messContent}>
                                    <a href="#">¥30</a>
                                    <div className={styles.fire}><div>142</div></div>
                                    <a href="#" className={styles.button}>马上抢 ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 已抢光 */}
                <div className={styles.light}  style={{display:'none'}}>
                    <div className={styles.light_pic}></div>
                </div>
            </div>
        )
    }
}