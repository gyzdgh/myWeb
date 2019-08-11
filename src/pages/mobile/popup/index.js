import React from 'react'
import { Button } from 'antd';

import styles from './index.css'

export default class popup extends React.PureComponent{
    state={
        display_name:'none'
    }

    display_name = () => { //编辑按钮的单击事件，修改状态机display_name的取值
        if (this.state.display_name === 'none') {
            this.setState({
                display_name: 'block',
            })
        }
        else if (this.state.display_name === 'block') {
            this.setState({
                display_name: 'none',
            })
        }
    }
    render(){
        return(
           <div className={styles.popup}>
               <div className={styles.button}>
                    <Button type="primary" onClick={this.display_name}>显示浮层</Button>
               </div>
               <div className={styles.popup_detail} style={{display:this.state.display_name}}>
                    <div className={styles.banner}>
                        <div className={styles.logo}></div>
                    </div>
                    <div className={styles.mess}>
                        <span>这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字这是文字</span>
                    </div>
               </div>
           </div> 
        )
    }
}