import React from 'react'
import styles from './index.css';
import { Data } from '../data'

// export default function () {
  export default class Index extends React.PureComponent {
    state={
      data:[]
    }
    componentDidMount(){
      this.fetchList()
    }

    fetchList = ()=>{
      this.setState({data:Data})
    }
    
    render(){
      return (
        <div className={styles.news}>
          <div className={styles.top_nav}>
            <div className={styles.logos}>
              <div className={styles.icon_zhubao}></div>
              <h1 className={styles.icon_mess}>中工珠宝检测中心</h1>
            </div>
            <ul className={styles.top_list}>
              <li><a>首页</a></li>
              <li>
                <a className={styles.current}>新闻动态
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
    
          <div className={styles.main}>
            <div className={styles.banner}></div>
            <div className={styles.container}>
              <div className={styles.line}></div>
              <section>
                <aside>
                  <div className={styles.side_menu}>
                    <div className={styles.menu_title}>
                      <i></i>
                      <span>&nbsp;新闻动态</span>
                    </div>
                    <ul className={styles.menu_list}>
                      <li className={styles.current}>通知公告</li>
                      <li>行业新闻</li>
                      <li>珠宝知识</li>
                    </ul>
                  </div>
                </aside>
                <div className={styles.detail}>
                  <div className={styles.title}>
                    <span>通知公告</span>
                  </div>
                  <div className={styles.content}>
                    <ul className={styles.content_list}>
                      {
                        this.state.data.map(item=>(
                          <li>
                            <a>{item.tilte}</a>
                            <span>{item.date}</span>
                          </li>
                        ))
                      }
                    </ul>
    
                    {/* 新闻列表页面 */}
    
                    <div className={styles.error} style={{display:'none'}}>
                      <i></i>
                      <span>暂无内容</span>
                    </div>
                    {/* 未找到资源页面 */}
                  </div>
                </div>
              </section>
            </div>
          </div>
    
          {/* 主体内容 */}
    
          <div className={styles.fotter}></div>
        </div >
      )
    }
}
