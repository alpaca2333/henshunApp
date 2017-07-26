import * as React from 'react';
import {Table} from 'antd';

export class InfoManagingPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="display-panel">
                <div className="display-title">
                    产品信息管理
                </div>
                <p></p>
                <div className="display-title">
                    拼团信息管理
                </div>
                <p></p>
                <div className="display-title">
                    众筹信息管理
                </div>
                <p>功能开发中</p>
            </div>
        )
    }
}