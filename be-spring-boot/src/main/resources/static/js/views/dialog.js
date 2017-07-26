/**
 * Created by alpaca on 17-6-20.
 */
import * as React from 'react';

export class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = Dialog.getInitialState();
    }

    static getInitialState() {
        return {
            title: 'dialog_title',
            dialogBody: <div>nothing here</div>
        }
    }

    render() {
        return (
            <div style={{padding: '24px'}}>
                <div id="dialog-header" style={{textAlign: 'left'}}>
                    <span style={{fontSize: '20px', fontWeight: '700', marginTop: '4px', display: 'inline-block'}} className="dialog-title">{this.state.title}</span>
                    <span style={{fontSize: '16px', marginLeft: '36px', float: 'right'}} onClick={window.closeDialog} className="glyphicon glyphicon-remove"/>
                </div>
                <div id="dialog-body">
                    {this.state.dialogBody}
                </div>
            </div>
        )
    }

    setDialogContent(jsx) {
        this.setState({
            dialogBody: jsx
        })
    }

    show(title, div) {
        window.showDialog(title, div);
    }

    close() {
        window.closeDialog();
    }
}