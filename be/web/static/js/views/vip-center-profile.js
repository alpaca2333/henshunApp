/**
 * Created by alpaca on 2017/3/3.
 */
import * as React from 'react';
import * as $ from 'jquery';
export class VipCenterProfilePane extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.switchToEdit = this.switchToEdit.bind(this);
        this.saveAndDisplay = this.saveAndDisplay.bind(this);
        this.cancelAndDisplay = this.cancelAndDisplay.bind(this);
    }

    componentWillMount() {
        $.getJSON('/api/vip/info', (data) => {
            if (data.error) {
                alert(data.message);
                window.location.reload();
            } else {
                data = data.data;
                this.setState({
                    phoneNumber: data.phoneNumber,
                    name: data.name,
                    creditCardNum: data.creditCardNum
                });
            }
        })
    }

    getDefaultState() {
        return {
            phoneNumber: null,
            name: null,
            creditCardNum: null,
            status: 'display'
        }
    }
    
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Profile</div>
                <div className="panel-body">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <img src="../../static/img/ayano_332.png" width="64px" height="64px" className="avatar64"/>
                            </td>
                            <td>
                                <div style={{marginLeft: '12px'}}>
                                    <p><strong style={{fontSize: '20px'}}>{this.state.name}</strong></p>
                                    <p className="label label-danger" style={{fontSize: '8px'}}>lv1</p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button ref="editButton" className="btn btn-info btn-sm" style={{float: 'right', display: this.state.status === 'edit' ? 'none' : 'block'}} onClick={this.switchToEdit}>编辑个人信息</button>
                    <button ref="saveButton" className="btn btn-info btn-sm" style={{float: 'right', display: this.state.status === 'edit' ? 'block' : 'none'}} onClick={this.saveAndDisplay}>保存</button>
                    <button ref="saveButton" className="btn btn-sm" style={{float: 'right', display: this.state.status === 'edit' ? 'block' : 'none', marginRight: '10px'}} onClick={this.cancelAndDisplay}>取消</button>
                    <ul className="list-group" style={{marginTop: '32px'}}>
                        <li className="list-group-item">
                            <p className="weak">姓名</p>
                            <p ref="nameLabel" style={{display: this.state.status === 'edit' ? 'none' : 'block'}}>{this.state.name}</p>
                            <input ref="nameText" type="text"className="form-control" style={{width: '300px', display: this.state.status === 'edit' ? 'block' : 'none'}}/>
                        </li>
                        <li className="list-group-item">
                            <p className="weak">手机号</p>
                            <p ref="phoneNumLabel" style={{display: this.state.status === 'edit' ? 'none' : 'block'}}>{this.state.phoneNumber}</p>
                            <input ref="phoneNumText" type="text" className="form-control" style={{width: '300px', display: this.state.status === 'edit' ? 'block' : 'none'}}/>
                        </li>
                        <li className="list-group-item">
                            <p className="weak">绑定的银行卡号</p>
                            <p ref="creditCardNumLabel" style={{display: this.state.status === 'edit' ? 'none' : 'block'}}>{this.state.creditCardNum}</p>
                            <input ref="creditCardNumText" type="text" className="form-control" style={{width: '300px', display: this.state.status === 'edit' ? 'block' : 'none'}}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    switchToEdit() {
        this.setState({
            status: 'edit',
            phoneNumber: this.refs.phoneNumLabel.innerHTML,
            name: this.refs.nameLabel.innerHTML,
            creditCardNum: this.refs.creditCardNumLabel.innerHTML
        });
        this.refs.phoneNumText.value = this.state.phoneNumber;
        this.refs.nameText.value = this.state.name;
        this.refs.creditCardNumText.value = this.state.creditCardNum;
    }

    saveAndDisplay() {
        const state = {
            status: 'display',
            phoneNumber: this.refs.phoneNumText.value,
            name: this.refs.nameText.value,
            creditCardNum: this.refs.creditCardNumText.value
        };
        this.setState(state);
        $.post('/api/vip/info', state, (result) => {
            if (result.error) {
                alert("修改信息失败：\n" + result.message);
            }
        });
    }

    cancelAndDisplay() {
        this.setState({
            status: 'display'
        });
    }
}