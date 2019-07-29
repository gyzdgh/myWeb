import styles from './index.css';

export default function () {
    return (
        <div className={styles.serve}>
            <div className={styles.top_nav}>
                <div className={styles.logos}>
                    <div className={styles.icon_zhubao}></div>
                    <h1 className={styles.icon_mess}>中工珠宝检测中心</h1>
                </div>
                <ul className={styles.top_list}>
                    <li><a>首页</a></li>
                    <li>
                        <a className={styles.dropdown}>新闻动态
                            <i className={styles.arrow_down}></i>
                        </a>
                        <div className={styles.content_arrow}></div>
                        <div className={styles.dropdown_content}>
                            <a href="#">通知公告</a>
                            <a href="#">行业新闻</a>
                            <a href="#">珠宝知识</a>
                        </div>
                    </li>

                    <li>
                        <a className={styles.dropdown}>证书查询
                            <i className={styles.arrow_down}></i>
                        </a>
                        <div className={styles.content_arrow}></div>
                        <div className={styles.dropdown_content}>
                            <a href="#">证书查询</a>
                            <a href="#">证书样板</a>
                        </div>
                    </li>

                    <li>
                        <a className={styles.dropdown}>关于我们
                            <i className={styles.arrow_down}></i>
                        </a>
                        <div className={styles.content_arrow}></div>
                        <div className={styles.dropdown_content}>
                            <a href="#">机构介绍</a>
                            <a href="#">专家力量</a>
                            <a href="#">资质认证</a>
                            <a href="#">人才招聘</a>
                        </div>
                    </li>

                    <li>
                        <a className={styles.current}>服务介绍
                            <i className={styles.arrow_down}></i>
                        </a>
                        <div className={styles.content_arrow}></div>
                        <div className={styles.dropdown_content}>
                            <a href="#">承建业务</a>
                            <a href="#">仪器设备</a>
                            <a href="#">检测流程</a>
                        </div>
                    </li>
                </ul>
            </div>

            {/* 顶部导航 */}

            <div className={styles.main}>
                <div className={styles.banner}></div>
                <div className={styles.container}>
                    <div className={styles.line}></div>
                    <section>
                        <aside>
                            <div className={styles.side_menu}>
                                <div className={styles.menu_title}>
                                    <i></i>
                                    <span>&nbsp;服务介绍</span>
                                </div>
                                <ul className={styles.menu_list}>
                                    <li className={styles.curren}>承接业务</li>
                                    <li className={styles.current}>仪器设备</li>
                                    <li className={styles.curren}>检测流程</li>
                                    <li className={styles.curren}>执行标准</li>
                                </ul>
                            </div>
                        </aside>
                        <div className={styles.detail}>
                            <div className={styles.title}>
                                <span>仪器设备</span>
                            </div>
                            <div className={styles.device_show}>
                                <div className={styles.show_pic}>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                    <div>
                                        <i></i>
                                        <span>大钻石</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* 页面主体 */}
            <div className={styles.fotter}></div>
        </div>
    )
}