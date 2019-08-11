import React from 'react'
import styles from './index.css';
// import { nonsense } from 'antd-mobile/lib/picker';
import { Data } from '../data'


export default class Index extends React.PureComponent {
  state = {
    searchValue:'',
    data:Data,
    result:{},
    empty:false
  }
  
  handleCertNoChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSearch = () => {
    const { searchValue } = this.state
    let empty=true
    let result={}
    if (searchValue) {
      this.state.data.map(item=>{
        if(searchValue === item.certNo){
          empty=false
          result=item
        }
      })
      this.setState({
        empty:empty,
        result:result
      })
    }
  }

  handleReset = () => {
    this.setState({
      searchValue: '',
      result:{},
      empty:false
    })
  }

  render() {
    const { searchValue, result,empty } = this.state
    return (
      <div className={styles.certSearch}>
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
              <a className={styles.current}>证书查询
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
                    <span>&nbsp;证书查询</span>
                  </div>
                  <ul className={styles.menu_list}>
                    <li className={styles.curren}>证书查询</li>
                    <li className={styles.current}>证书样板</li>
                  </ul>
                </div>
              </aside>
              <div className={styles.detail}>
                <div className={styles.title}>
                  {/* <span>证书查询</span> */}
                  <span>证书样板</span>
                </div>
                <div className={styles.search_cards}>
                  <div className={styles.cards}>

                    <h2>
                      <i></i><span>证书查询</span>
                    </h2>
                    {/* 证书查询页面 start*/}
                    <div className={styles.search_detail}>
                      证书编号: &nbsp;&nbsp;
                        <input value={searchValue} placeholder="请输入证书编号" type="text" onChange={this.handleCertNoChange}/>
                    </div>
                    <div className={styles.search_button}>
                      <button type="primary" onClick={this.handleSearch}>查询</button>
                      <button onClick={this.handleReset}>重置</button>
                    </div>
                    <p>温馨提示：若您未查询到结果，可能数据正在上传，请过两天再次查询。给您带来不便，敬请见谅！</p>
                    {/* 证书查询页面 end*/}
                    {/*证书信息页面  start*/}
                    <div className={styles.cert_mess} style={{display:result.certNo?'':'none'}}>
                      <ul className={styles.mess_list}>
                        <li>
                          <span>鉴定结果</span><span>{result.Conclusion}&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>总重量&emsp;</span><span>{result.Weight}&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>主石名称</span><span>花雕&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>颜色&emsp;&emsp;</span><span>青黄&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>折射率&emsp;</span><span>{result.Refractive}&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>密度&emsp;&emsp;</span><span>因串未测&emsp;</span>
                        </li>
                        <li>
                          <span>放大检查</span><span>前位交织结</span>
                        </li>
                        <li>
                          <span>备注&emsp;&emsp;</span><span>无&emsp;&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>鉴定师&emsp;</span><span>张三&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>审核人&emsp;</span><span>李四&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>编书证号</span><span>13.3&emsp;&emsp;&emsp;</span>
                        </li>
                        <li>
                          <span>鉴定机构</span><span>中共珠宝检</span>
                        </li>
                      </ul>
                      <div className={styles.mess_pic}>
                        <ul className={styles.pic_small}>
                          <li><i></i></li>
                          <li><i></i></li>
                          <li><i></i></li>
                          <li><i></i></li>
                        </ul>
                        <div className={styles.pic_big}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    {/*证书信息页面  end*/}
                    {/* 未找到资源页面start */}
                    {
                      empty && (
                      <div className={styles.error}>
                        <i></i>
                        <span>没有查询到证书信息，请核对编号输入是否有误！</span>
                        <button>重新查询</button>
                      </div>
                      )
                    }
                   
                    {/* 未找到资源页面end */}
                  </div>
                </div>

                <div style={{ display: 'none' }} className={styles.cert_template}>
                  <span>证书样式</span>
                  <ul className={styles.template_pic}>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                    <li>
                      <i></i>
                      <span>宝玉石鉴定证书 尺寸：40x30mm</span>
                    </li>
                  </ul>
                </div>
                {/* 证书样板页面 */}
              </div>
            </section>
          </div>
        </div>

        {/* 搜索卡片 */}

        <div className={styles.fotter}></div>
      </div>
    )
  }
}