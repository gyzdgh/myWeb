import React from 'react'
import { Select, Button, Pagination, Table, Divider, Tag } from 'antd';
import axios from 'axios'

import styles from './index.css';



const { Option } = Select;

export default class Index extends React.PureComponent {
    state = {
        department: '',
        status: '',
        name: '',
        pages:"1",
        totals:"1"
    }

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: text => <span>{text === 0 ? '离职' : '在职'}</span>
        },
        {
            title: '部门',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;" onClick={() => alert(record.name)}>编辑</a>
              </span>
            ),
        },
    ];

    getData = () => {
        const { department, status, name, pages } = this.state
        axios.get(`http://yapi.demo.qunar.com/mock/84959/admin/userList?department=${department}&status=${status}&name=${name}&pages=${pages}`)
            .then(response => {
                this.setState({ 
                    userList: response.data.data.list,
                    pages: response.data.data.page,
                    totals:response.data.data.total
                    
                })
                console.log(response.data.data.page)
                console.log(response.data.data.total)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChange = (value) => {
        // console.log(`selected ${value}`);
        this.setState({
            department: value
        })
    }

    onChangeStatus = (value) => {
        this.setState({
            status: value
        })
    }

    onChangeName = (value) => {
        this.setState({
            name: value
        })
    }

    changePage = (page) => {
        this.setState({
            pages:page
        },  ()=> this.getData())
    }

    search = () => {
        this.getData()
    }

    handleReset = () => {
        this.setState({
            department: '',
            status: '',
            name: ''
        })
    }

    render() {
        const { department, status, name, pages, totals} = this.state
        console.log(this.state);
        return (
            <div className={styles.staff}>
                {/* 顶部导航 */}
                <div className={styles.top}>
                    <div className={styles.department}>
                        <lable>部门:</lable>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="客户服务部/维权组/全部"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            value={department}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            <Option value="department1">部门1</Option>
                            <Option value="department2">部门2</Option>
                        </Select>
                    </div>
                    <div className={styles.status}>
                        <lable>状态:</lable>
                        <Select
                            showSearch
                            style={{ width: 80 }}
                            placeholder="全部"
                            optionFilterProp="children"
                            onChange={this.onChangeStatus}
                            value={status}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            <Option value="1">在职</Option>
                            <Option value="0">离职</Option>
                        </Select>
                    </div>
                    <div className={styles.worker_name}>
                        <lable>员工姓名:</lable>
                        <Select
                            showSearch
                            style={{ width: 120 }}
                            placeholder="请输入关键字"
                            optionFilterProp="children"
                            onChange={this.onChangeName}
                            value={name}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            <Option value="qiaofeng">乔峰</Option>
                            <Option value="nah">牛爱花</Option>
                        </Select>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" className={styles.search} onClick={this.search}>查询</Button>
                        <Button className={styles.reast} onClick={this.handleReset}>重置</Button>
                    </div>
                </div>
                {/* 内容列表 */}
                <div className={styles.main}>
                    <Table 
                        columns = { this.columns } 
                        dataSource = { this.state.userList }
                        pagination = {false} 
                        locale={{emptyText: '暂无数据' }}
                    />
                </div>
                {/* 底部分页 */}
                <div className={styles.page}>
                    {
                        (totals >= 1) && (
                            <Pagination defaultCurrent = {Number(pages)} total={Number(totals)} onChange={this.changePage}/>
                        ) 
                    }
                      
                </div>
            </div>
        )
    }
}