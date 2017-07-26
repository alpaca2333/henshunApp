/**
 * 控制台侧边导航栏。
 * 可以设置当前选中的导航项。可以为每个项设置点击动作或者链接地址。
 * Created by alpaca on 17-6-13.
 */

import * as React from 'react';

export class ConsoleNavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ConsoleNavList.initialState;
        this.render = this.render.bind(this);
        this.setSelectedIndex = this.setSelectedIndex.bind(this);
    }

    static defaultProps = {
        navData: [
            {
                iconSpan: (<span className="glyphicon glyphicon-user" />),
                onclick: () => { },
                href: null,
                text: '顾客信息',
                navType: 'link' // link or action
            }
        ]
    };

    static initialState = {
        selectedIndex: 0
    };

    render() {
        const navList = [];
        for (let i in this.props.navData) {
            const nav = this.props.navData[i];
            const className = (i == this.state.selectedIndex) ? 'nav-item active' : 'nav-item';
            const actions = []; // 每个项除了要执行用户指定的动作，还要更改当前选中的项。
            actions.push(() => {
                this.setState({
                    selectedIndex: i
                });
                window.components.consoleFrame.clearBackStack();
            });
            if (nav.navType === 'action' && nav.onclick) {
                actions.push(nav.onclick);
            }
            const finalAction = () => {
                for (let action of actions) {
                    action.call(this);
                }
            };
            const href = nav.navType === 'link' ? nav.href : null;
            navList.push(
                <li className={className} key={"nav" + i} onClick={finalAction} ref={'item' + i}>
                    <a href={href} >
                        {nav.iconSpan}
                        {nav.text}
                    </a>
                </li>
            )
        }
        return (
            <ul className="no-padding nav-list">
                {navList}
            </ul>
        );
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index
        });
    }

    clickItem(index) {
        const item = this.refs['item' + index];
        if (item) {
            item.click();
        }
    }
}