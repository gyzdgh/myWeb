import React from 'react'
import axios from 'axios'

import styles from './index.css'
import Item from 'antd/lib/list/Item';

export default class Mobile extends React.PureComponent {
    state={
        data:[],
        mess:[],
        type:1
    }

    componentDidMount() {
        // 为给定 ID 的 user 创建请求
        this.getData(1)
        axios.get('http://yapi.demo.qunar.com/mock/84959/admin/message')
        .then(response => {
            this.setState({ mess: response.data.data.message})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getData = (type) => {
        axios.get(`http://yapi.demo.qunar.com/mock/84959/admin/coupon?type=${type}`)
            .then(response => {
                this.setState({ data: response.data.data.list})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderPrice = (data) =>{
        return data.map(price =>(
            <div>
                <p className={styles.money}>¥{price.cutPrice}</p>
                <p className={styles.fulfil}>满{price.startPrice}元可用<i></i></p>  
            </div> 
        ))
    }
    
    handleChange = (type) => ()=>{
        this.getData(type)
        this.setState({type : type})
    }

    render() {
        const {type, mess, data} = this.state
        return (
            <div className={styles.coupon}>
                {/* 头部导航 */}
                <div className={styles.top}>
                    <div className={styles.top_mess}>
                        <div className={styles.avatar}></div>
                        {
                            mess.map(item =>{
                                return(
                                    <p>{item}</p>
                                )
                            })
                        }
                    </div>
                    <div className={styles.top_banner}></div>
                </div>

                {/* 内容列表 */}
                <div className={styles.coupon_list}>
                    <div className={styles.store+' '+(type === 1 &&styles.current)} onClick={this.handleChange(1)}>热门店铺</div>
                    <div className={styles.purple +' '+(type === 2 &&styles.current)} onClick={this.handleChange(2)}>紫砂陶瓷</div>
                    <div className={styles.craft +' '+(type === 3 &&styles.current)} onClick={this.handleChange(3)}>工艺作品</div>
                    <div className={styles.wenwan +' '+(type === 4 &&styles.current)} onClick={this.handleChange(4)}>文玩杂项</div>
                    <div className={styles.tea +' '+(type === 5 &&styles.current)} onClick={this.handleChange(5)}>茶酒
                        <div className={styles.mask}></div>
                    </div>
                </div>

                {/* 证劵内容 */}

                <div className={styles.coupon_content}>
                    {
                        data.map(item =>{
                            return(
                                <div className={styles.coupon_detail}>
                                    <div className={styles.coupon_banner}>
                                        <div className={styles.pic}></div>
                                        <div className={styles.grade}>
                                            <div className={styles.grade_logo}>
                                                <div className={styles.grade_pic}></div>
                                            </div>
                                            <div className={styles.nums}>
                                                <span className={styles.v}>V</span><span className={styles.num}>{item.level}</span>
                                            </div>
                                        </div>
                                        <span className={styles.grade_title}>{item.shopName}</span>    
                                        {
                                            (item.condition.length === 1) && (
                                                <div className={styles.coupon_mess}>
                                                    <a>¥{item.condition[0].cutPrice}</a>
                                                    <span>满{item.condition[0].startPrice}元立减</span>                                      
                                                </div>
                                            )
                                        }
                                        {
                                            (item.condition.length > 1) && (
                                                <div className={styles.coupon_messfull}>
                                                    {
                                                        this.renderPrice(item.condition)
                                                    }   
                                                </div>
                                            )
                                        }
                                        {
                                            (item.status === '0') ? (
                                                <div className={styles.received}>
                                                    <div className={styles.received_pic}></div>
                                                </div> 
                                            ) :(
                                                <div className={styles.get}>
                                                    <span>立即</span>
                                                    <span>领取</span>
                                                </div>
                                            )
                                        }                                   
                                    </div>   
                                </div>
                            )
                        })
                    }
                </div>    
            </div>
        )
    }
}

