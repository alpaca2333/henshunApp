/**
 * Created by alpaca on 2017/2/27.
 */
import * as React from 'react';

export class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
        if (this.props.selectedIndex) {
            this.state.selectedIndex = this.props.selectedIndex;
        }
    }

    static defaultProps = {
        navs: [
            {
                text: 'item1',
                action: '',
                href: '',
            }
        ],
        selectedIndex: 0
    };

    getDefaultState() {
        return {
            selectedIndex: 0
        }
    }

    render() {

        const navs = this.props.navs;
        const navItems = [];
        for (const i in navs) {
            this.actionDict[i] = [];
            this.actionDict[i].push(() => {
                this.setSelected(i);
            });
            if (navs[i].action) {
                this.actionDict[i].push(navs[i].action);
            }
            const action = () => {
                for (const act of this.actionDict[i]) {
                    act.call();
                }
            };
            navItems.push(
                <li className={i == this.state.selectedIndex ? "active" : null} key={'navItem#' + i}>
                    <a href={navs[i].href ? navs[i].href : null} onClick={action}>
                        {navs[i].text}
                    </a>
                </li>
            );
        }
        return (
            <ul className="nav nav-pills nav-stacked">
                {navItems}
            </ul>
        );
    }

    setSelected(selectedIndex) {
        this.setState({
            selectedIndex: selectedIndex
        });
    }

    actionDict = {};
}