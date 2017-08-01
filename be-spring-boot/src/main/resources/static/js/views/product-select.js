/**
 * Created by alpaca on 2017/7/27.
 */
import * as React from 'react';
import {Select} from 'antd';

export class ProductSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProductSelect.initialState;
    }

    static defaultProps = {
        selectedId: null,
        onChange: () => {}
    };

    static initialState = {
        products: [
            {
                id: 10000001,
                name: '盖中盖',
                price: 159
            },
            {
                id: 10000002,
                name: '铁忠铁',
                price: 12
            },
            {
                id: 10000003,
                name: '新中心',
                price: 131
            }
        ]
    };

    render() {
        const options = [];
        for (let i in this.state.products) {
            const option = this.state.products[i];
            options.push(<Select.Option key={i + ''} value={option.id + ''}>{option.id} - {option.name} - {option.price}</Select.Option>)
        }
        return (
            this.props.selectedId ? <Select
                labelInValue
                style={{width: 200}}
                showSearch
                placeholder="id/产品名"
                defaultValue={{key: this.props.selectedId + ''}}
                onChange={this.props.onChange}
                filterOption={(input, option) => {
                    let result = false;
                    for (let i in option.props.children) {
                        const item = option.props.children[i] + '';
                        if (item.toLowerCase().indexOf(input.trim().toLowerCase()) > -1) result = true;
                    }
                    return result;
                }}
            >
                {options}
            </Select> : <Select
                labelInValue
                style={{width: 200}}
                showSearch
                placeholder="id/产品名"
                onChange={this.props.onChange}
                filterOption={(input, option) => {
                    let result = false;
                    for (let i in option.props.children) {
                        const item = option.props.children[i] + '';
                        if (item.toLowerCase().indexOf(input.trim().toLowerCase()) > -1) result = true;
                    }
                    return result;
                }}
            >
                {options}
            </Select>

        )
    }

    componentDidMount() {
        /* load product list via api */
    }
}