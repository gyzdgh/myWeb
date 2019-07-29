import styles from './index.css';

export default function () {
  return (
    <div className={styles.home}>
      <div className={styles.top_nav}>
        <div className={styles.logos}>
          <div className={styles.icon_zhubao}></div>
          <h1 className={styles.icon_mess}>中工珠宝检测中心</h1>
        </div>
        <ul className={styles.top_list}>
          <li><a className={styles.current}>首页</a></li>
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

      <div className={styles.banner}></div>
      {/* 轮播图片 */}

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.search}>
            <h2>
              <i></i><span>证书查询</span>
            </h2>
            <div className={styles.detail}>
              证书编号: &nbsp;&nbsp;
                <input placeholder="请输入证书编号" type="text" />
            </div>
            <p>温馨提示：因系统升级，若证书无查询码则无需输入。若您未查询到结果，可能数据正在上传，请过两天再次查询。给您带来不便，敬请见谅！</p>
            <div className={styles.search_button}>
              <button>
                <span>查询</span>
              </button>
              <button>
                <span>重置</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.news}>
            <h2>
              <span>
                <i></i>
                最新消息
              </span>
              <a>
                更多
                <i></i>
              </a>
            </h2>
            <div className={styles.detail}>
              <ul className={styles.list}>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
                <li>
                  <a>【通知公告】新闻资讯这是内容这是新闻资讯的标题</a>
                  <span>2019-05-09</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 证书查询和最新消息 */}

      <div className={styles.friendShip}>
        <div className={styles.title}>
          <i className={styles.link_l}></i>
          <span>友情链接</span>
          <i className={styles.link_r}></i>
        </div>
        <p>中国标准协会化 | 珠宝人才网 | 21世纪珠宝网 | 珠宝之家网 | 中国珠宝玉石 | 中国黄金协会网 | 中维珠宝培训 | 中国珠宝检测网| 中国黄金协会网 | 中维珠宝培训 | 中国珠宝检测网| 中国黄金协会网 | 中维珠宝培训</p>
      </div>
      {/* 友情链接 */}
      <div className={styles.fotter}></div>
      {/* 底部 */}
    </div>
  );
}
