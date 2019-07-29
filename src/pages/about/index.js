import styles from './index.css';

export default function () {
    return (
        <div className={styles.about}>
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
                        <a className={styles.current}>关于我们
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
                        <a className={styles.dropdown}>服务介绍
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
                                    <span>&nbsp;关于我们</span>
                                </div>
                                <ul className={styles.menu_list}>
                                    <li className={styles.curren}>机构介绍</li>
                                    <li className={styles.curren}>专家力量</li>
                                    <li className={styles.curren}>资质认证</li>
                                    <li className={styles.curren}>人才招聘</li>
                                    <li className={styles.current}>站点信息</li>
                                </ul>
                            </div>
                        </aside>
                        <div className={styles.detail}>
                            <div className={styles.title}>
                                {/* <span>专家力量</span> */}
                                <span>站点信息</span>
                            </div>
                            {/* <div className={styles.expert_mess}>
                                <ul className={styles.expert_list}>
                                    <li>
                                        <i></i>
                                        <div className={styles.expert_infor}>
                                            <span>姓名：张三</span>
                                            <p>职务：总经理 职称：高级工程师 1988年7月-1996年9月，南京铁合金厂中心化验室从事冶金分析，1995年出任中心化验室主任；1996年9-2014年12月，南京市产品质量监督检验院内的国家金银制品质量监督检验中心（南京）从事贵金属及珠宝玉石检验研究，2000年出任国家中心检验室主任，2014年出任南京市产品质量监督检验院总工程师。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <div className={styles.expert_infor}>
                                            <span>姓名：张三</span>
                                            <p>职务：总经理 职称：高级工程师 1988年7月-1996年9月，南京铁合金厂中心化验室从事冶金分析，1995年出任中心化验室主任；1996年9-2014年12月，南京市产品质量监督检验院内的国家金银制品质量监督检验中心（南京）从事贵金属及珠宝玉石检验研究，2000年出任国家中心检验室主任，2014年出任南京市产品质量监督检验院总工程师。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <div className={styles.expert_infor}>
                                            <span>姓名：张三</span>
                                            <p>职务：总经理 职称：高级工程师 1988年7月-1996年9月，南京铁合金厂中心化验室从事冶金分析，1995年出任中心化验室主任；1996年9-2014年12月，南京市产品质量监督检验院内的国家金银制品质量监督检验中心（南京）从事贵金属及珠宝玉石检验研究，2000年出任国家中心检验室主任，2014年出任南京市产品质量监督检验院总工程师。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                            <div className={styles.site_mess}>
                                <div className={styles.site_list}>
                                    <p>站点一:</p>
                                    <p>
                                        地址:&emsp;&emsp;
                                        广东省广州市荔湾区康王中路华林国际6楼6A32室
                                    </p>
                                    <p>电话:&emsp;&emsp;0666-88888888</p>
                                    <p>传真:&emsp;&emsp;0666-88888888</p>
                                </div>
                                <div className={styles.site_list}>
                                    <p>站点一:</p>
                                    <p>
                                        地址:&emsp;&emsp;
                                        广东省广州市荔湾区康王中路华林国际6楼6A32室
                                    </p>
                                    <p>电话:&emsp;&emsp;0666-88888888</p>
                                    <p>传真:&emsp;&emsp;0666-88888888</p>
                                </div>
                                <div className={styles.site_list}>
                                    <p>站点一:</p>
                                    <p>
                                        地址:&emsp;&emsp;
                                        广东省广州市荔湾区康王中路华林国际6楼6A32室
                                    </p>
                                    <p>电话:&emsp;&emsp;0666-88888888</p>
                                    <p>传真:&emsp;&emsp;0666-88888888</p>
                                </div>
                                <div className={styles.site_map}></div>
                            </div>

                            {/* 站点信息 */}
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles.fotter}></div>
        </div>
    )
}