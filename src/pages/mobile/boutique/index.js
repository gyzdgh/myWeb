import React from 'react'

import styles from './index.css'

export default class Mobile extends React.PureComponent {
    render() {
        return (
            <div className={styles.boutique}>
                {/* 头部导航 */}
                <div className={styles.top}>
                    <div className={styles.top_mess}>
                        <div className={styles.avatar}></div>
                        <p>湖南的张三，一秒前出价100元</p>
                    </div>
                    <div className={styles.top_banner}></div>
                </div>

                {/* 精品列表 */}
                <div className={styles.boutique_list}>
                    <div className={styles.default}>默认</div>
                    <div className={styles.price}>价格
                        <div className={styles.arrow}>
                            <div className={styles.on}></div>
                            <div className={styles.under}></div>
                        </div>      
                    </div>
                    <div className={styles.sort}>分类
                        <div className={styles.triangle_down}></div>
                    </div>
                </div>

                {/* 精品内容 */}
                <div className={styles.boutique_content}>
                    <div className={styles.piece}>
                        <div className={styles.mask}></div>
                        <div className={styles.piece_mess}>
                            <a href="#" className={styles.title}>德钟壶/球孔出水（含…</a>
                            <a href="#" className={styles.boutique_money}>¥999</a>
                            <div className={styles.fire}><div>142</div></div>
                        </div>
                    </div>
                    <div className={styles.piece}>
                        <div className={styles.mask}></div>
                        <div className={styles.piece_mess}>
                            <a href="#" className={styles.title}>德钟壶/球孔出水（含…</a>
                            <a href="#" className={styles.boutique_money}>¥999</a>
                            <div className={styles.fire}><div>142</div></div>
                        </div>
                    </div>
                    <div className={styles.piece}>
                        <div className={styles.mask}></div>
                        <div className={styles.piece_mess}>
                            <a href="#" className={styles.title}>德钟壶/球孔出水（含…</a>
                            <a href="#" className={styles.boutique_money}>¥999</a>
                            <div className={styles.fire}><div>142</div></div>
                        </div>
                    </div>
                    <div className={styles.piece}>
                        <div className={styles.mask}></div>
                        <div className={styles.piece_mess}>
                            <a href="#" className={styles.title}>德钟壶/球孔出水（含…</a>
                            <a href="#" className={styles.boutique_money}>¥999</a>
                            <div className={styles.fire}><div>142</div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}