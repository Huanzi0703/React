import React,{Component} from 'react';
import {
	Row,
	Col,
	Layout, 
	Input,
	Menu,
	Button,
	Breadcrumb, 
	Popconfirm,
} from 'antd'
import ATable from './aTable'
import '../../../App.css'

const { Content } = Layout;


export default class activity_sign extends Component{
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
		if(nextPage == 'back'){
			this.props.Router(this.props.message.historyPage,mess,this.props.message.nextPage)
		}else {
			this.props.Router(nextPage,mess,this.props.message.nextPage)
		}
	}

	_print(){
		window.print();
	}

	render(){
		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb className="printHidden" style={{ margin: '12px 0' }}>
				<Breadcrumb.Item>活动管理</Breadcrumb.Item>
				<Breadcrumb.Item>签到</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 80 }}>
					<Row type="flex" justify="space-between" gutter={1}>
						<Col span={2} className="printHidden">
							<Button style={{marginBottom: 20}} onClick={()=>this._jump('back')}>返回</Button>
						</Col>

						<Col span={2} className="printHidden">
								<Button onClick={() => this._print()}>打印</Button>
						</Col>
					</Row>
					<ATable  message={this.mess} Router={this.Router}/>
				</Content>
			</Layout>
		)
	}
}