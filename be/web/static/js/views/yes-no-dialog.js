/**
 * Created by alpaca on 17-6-23.
 */
import * as React from 'react';

export class YesNoDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        content: '',
        yesOption: () => { window.closeDialog(); },
        noOption: () => { window.closeDialog(); }
    };

    render() {
        return (
            <div>
                {this.props.content}
                <div className="dialog-footer">
                    <button
                        className="btn btn-primary"
                        onClick={
                            this.props.yesOption
                        }>是</button>
                    <button
                        className="btn btn-default" style={{marginLeft: '36px'}}
                        onClick={
                            this.props.noOption
                        }>否</button>
                </div>
            </div>
        )
    }
}