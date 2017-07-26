import React,{Component} from 'react';
import {
	Layout, 
	Input,
	Menu,
	Button,
	Breadcrumb, 
	Popconfirm,
} from 'antd'
import ATable from './aTable'
import  '../../../App.css'

const { Content } = Layout;

export default class volunteer_edit extends Component{
	constructor(props){
		super(props);
		this.Router;
		this.mess = null;
	}

	componentWillMount(){
		this.Router = this.props.Router;
		this.mess = this.props.message;
	}

	_jump(nextPage,mess){
		this.Router(nextPage,mess,this.mess.nextPage)
	}
	render(){
		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }} className="printHidden">
				 <Breadcrumb.Item>活动管理</Breadcrumb.Item>
				<Breadcrumb.Item>新增（修改）活动</Breadcrumb.Item> 
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 80 }}>
					<ATable message={this.mess} Router={this.Router}/>
				</Content>
			</Layout>
		)
	}
}