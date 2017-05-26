import * as React from 'react';
import {getUniqueToken} from '../lib/string.js';

export class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setStatus = this.setStatus.bind(this);
    }

    getDefaultState() {
        return {
            status: 'common',   // common, success, warning, error
            value: '',
            prompt: ''
        }
    } ;

    static defaultProps = {
        name: '',
        placeholder: '',
        id: getUniqueToken(),
        isPassword: false
    };

    setStatus(status, prompt) {
        const id = this.props.id;
        const inputText = document.getElementById(id);
        this.setState({
            status: status,
            value: inputText.value,
            prompt: prompt
        });
        if (status !== 'common') {
            setTimeout(() => {
                this.setStatus('common', '');
                this.requireFocus();
            }, 3000)
        }
    }

    render() {
        const type = this.props.isPassword ? 'password' : 'text';
        const status = this.state.status;
        if (status === 'common') {
            return (
                <input type={type} name={this.props.name} className="form-control"  placeholder={this.props.placeholder} id={this.props.id}  defaultValue={this.state.value}/>
            );
        }
        if (status === 'success') {
            const promptText = this.state.prompt ? '' : (
                    <label className="control-label">{this.state.prompt}</label>
                );
            return (
                <div className="form-group has-success has-feedback">
                    {promptText}
                    <input type={type}  className="form-control" id={this.props.id} defaultValue={this.state.value}/>
                    <span className="glyphicon glyphicon-ok form-control-feedback"/>
                </div>
            )
        } else if (status === 'warning') {
            const promptText = this.state.prompt ? '' : (
                    <label className="control-label">{this.state.prompt}</label>
                );
            return (
                <div className="form-group has-warning has-feedback">
                    {promptText}
                    <input type={type}  className="form-control" id={this.props.id} defaultValue={this.state.value}/>
                    <span className="glyphicon glyphicon-warning-sign form-control-feedback"/>
                </div>
            )
        } else if (status === 'error') {
            const promptText = this.state.prompt ? (
                    <label className="control-label">{this.state.prompt}</label>
                ) : '';
            return (
                <div className="form-group has-error has-feedback">
                    {promptText}
                    <input type={type}  className="form-control" id={this.props.id} defaultValue={this.state.value}/>
                    <span className="glyphicon glyphicon-remove form-control-feedback"/>
                </div>
            )
        }
    }

    componentDidMount() {
        /*const inputText = document.getElementById(this.props.id);
         inputText.onclick = () => {
         this.setStatus('common', '');
         }*/
    }

    requireFocus() {
        const inputText = document.getElementById(this.props.id);
        inputText.focus();
    }

    getValue() {
        const id = this.props.id;
        const inputText = document.getElementById(id);
        return inputText.value;
    }
}