import React from 'react'
import axios from 'axios'

import styles from './index.css'

export default class Order extends React.PureComponent {
    state = {
        data: []
    }

    componentDidMount() {
        // 为给定 ID 的 user 创建请求
        axios.get('http://yapi.demo.qunar.com/mock/84959/admin/getOrder?type=1')
            .then(response => {
                this.setState({ data: response.data.data.list})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const renderTime = ( item, status) => {
            let html = ''
            if(status === 10){
                html = <React.Fragment><span>付款剩余：</span><span>{item.endTiem}</span>/></React.Fragment>
            }else if(status === 30){
                html = <React.Fragment><span>付款时间：</span><span>{item.paidTime}</span>/></React.Fragment>
            }else if(status === 40){
                html = <React.Fragment><span>发货时间：</span><span>{item.deliveryTime}</span>/></React.Fragment>
            }else if(status === 50){
                html = <React.Fragment><span>收货时间</span><span>{item.receiveTime}</span>/></React.Fragment>
            }else if(status === 60){
                html = <React.Fragment><span>结束时间</span><span>{item.cancelTime}</span>/></React.Fragment>
            }
            return html
        }
        return (
            <div className={styles.order}>
                <div className={styles.top}>
                    <ul>
                        <li className={styles.deal}>
                            <a>交易订单</a>
                        </li>
                        <li className={styles.goods}>
                            <a>提货订单</a>
                        </li>
                    </ul>
                    <div className={styles.clearBoth}></div>
                </div>

                <div className={styles.detail}>

                    {
                        this.state.data.map(item => {
                            return (
                                <div className={styles.product}>
                                    <div className={styles.product_title}>
                                        <span>「发行号 {item.publishNo || '000'}」</span>
                                        <a>{item.statusName}</a>
                                    </div>
                                    <div className={styles.product_content}>
                                        <i></i>
                                        <div className={styles.content_mess}>
                                            <ul>
                                                <li>
                                                    <span className={styles.mess_title}>{item.goodsTitle}</span>
                                                </li>
                                                <li>
                                                   {
                                                        renderTime(item, item.state)
                                                    }
                                                </li>
                                                <li>
                                                    <span>数量&emsp;&emsp;：</span><span>{item.num}个</span>
                                                </li>
                                                <li>
                                                    <span>提货费&emsp;：</span><span>¥ {item.payMoney}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.pay}>
                                        <a className={styles.logistics}>查看物流</a>
                                        <a className={styles.pay_for}>立即付款</a>
                                    </div>
                                    <div className={styles.clearBoth}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}