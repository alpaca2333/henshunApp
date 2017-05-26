/**
 * Created by alpaca on 2017/3/11.
 */
import * as React from 'react';

export class HwManagerFinancial extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            hotels: [
                {
                    id: '123123',
                    name: 'Fucked Hotel',
                    income: 123123,
                    actualIncome: 2
                }
            ]
        }
    }

    render() {
        const hotels = [];
        for (let i in this.state.hotels) {
            const hotel = this.state.hotels[i];
            hotels.push(
                <a className="list-group-item" key={'hotel#' + i}>
                    <h4 className="list-group-item-heading">{hotel.name}</h4>
                    <div className="list-group-item-text">
                        <p className="weak">
                            实际收入：{hotel.actualIncome}&nbsp;&nbsp;
                            字面收入：{hotel.income}&nbsp;&nbsp;
                        </p>
                        <button className="btn btn-primary btn-sm">结算给该店</button>
                    </div>
                </a>
            );
        }
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Financial Reports</div>
                <div className="panel-body list-group">
                    {hotels}
                </div>
            </div>
        );
    }
}