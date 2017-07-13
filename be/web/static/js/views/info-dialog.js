/**
 * Created by alpaca on 17-6-23.
 */
import * as React from 'react';

export class InfoDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        content: '',
        okOption: () => { window.closeDialog() }
    };

    render() {
        return (
            <div>
                {this.props.content}
                <div className="dialog-footer">
                    <button
                        className="btn btn-primary"
                        onClick={
                            this.props.okOption
                        }>确定</button>
                </div>
            </div>
        )
    }
}