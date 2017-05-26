/**
 * Created by alpaca on 2017/3/21.
 */
import * as React from 'react';

export class RoomSchedulePane extends React.Component {
    constructor(props) {
        super(props);
        this.submitRoom = this.submitRoom.bind(this);
    }

    render() {
        return (
            <div className="col-md-9">
                <button ref="addRoomB" className="btn btn-primary" onClick={this.showAddRoom.bind(this)}>添加房间 >></button>
                <ul ref="addRoom" className="panel  list-group" style={{marginTop: '10px'}}>
                    <li className="list-group-item">
                        <span className="weak">房型：</span>
                        <select ref="roomType" className="select form-control" style={{display: 'inline', width: '100px', marginRight: '12px'}}>
                            <option value={0}>单人间</option>
                            <option value={1}>双人间</option>
                            <option value={2}>大床间</option>
                        </select>
                        <span className="weak">房间号(用'/'隔开)：</span>
                        <input ref="roomNum" className="form-control" type="text" style={{display: 'inline', width: '200px', marginRight: '12px'}}/>
                        <button onClick={this.submitRoom} className="btn btn-primary" style={{display: 'inline'}}>添加</button><br/>
                        <span className="weak">价格：</span>
                        <input ref="roomPrice" className="form-control" type="number" style={{display: 'inline', width: '100px', marginRight: '12px'}}/>
                        <span className="weak">描述：</span>
                        <input ref="description" className="form-control" type="text" style={{display: 'inline', width: '200px', marginRight: '12px'}}/>
                    </li>
                </ul><br/>
                <button ref="addScheduleB" className="btn btn-primary" onClick={this.showAddSchedule.bind(this)} style={{marginTop: '10px'}}>
                    添加计划 >>
                </button>
                <ul ref="addSchedule" className="panel panel-primary list-group" style={{marginTop: '10px'}}>
                    <div className="panel-heading">添加计划</div>
                    <li className="list-group-item">
                        <p className="weak">房型：</p>
                        <select ref="roomType2" className="select form-control" style={{display: 'inline', width: '100px', marginRight: '12px'}}>
                            <option value={0}>单人间</option>
                            <option value={1}>双人间</option>
                            <option value={2}>大床间</option>
                        </select>
                    </li>
                    <li className="list-group-item">
                        <p className="weak">开始日期：</p>
                        <input ref="start" className="form-control" type="date"/>
                    </li>
                    <li className="list-group-item">
                        <p className="weak">结束日期：</p>
                        <input ref="end" className="form-control" type="date"/>
                    </li>
                    <li className="list-group-item">
                        <button onClick={this.submitSchedule.bind(this)} className="btn btn-primary">添加计划</button>
                    </li>
                </ul>
            </div>
        )
    }

    submitRoom() {
        $.post('/api/room', {
            roomType: this.refs.roomType.selectedIndex,
            roomNum: this.refs.roomNum.value,
            price: this.refs.roomPrice.value,
            description: this.refs.description.value
        }, (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                this.refs.addRoom.style.display = 'none';
                this.refs.addRoomB.style.display = 'block';
            }
        });
    }

    submitSchedule() {
        $.post('/api/schedule', {
            from: this.refs.start.value,
            to: this.refs.end.value,
            roomType: this.refs.roomType2.selectedIndex
        }, (result) => {
            if (result.error) {
                alert(result.message);
            } else {
                alert("添加计划成功！");
                this.refs.addSchedule.style.display = 'none';
                this.refs.addScheduleB.style.display = 'block';
            }
        })
    }

    componentDidMount() {
        this.refs.addRoom.style.display = 'none';
        this.refs.addSchedule.style.display = 'none';
    }

    showAddRoom() {
        this.refs.addRoom.style.display = 'block';
        this.refs.addRoomB.style.display = 'none';
    }

    showAddSchedule() {
        this.refs.addSchedule.style.display = 'block';
        this.refs.addScheduleB.style.display = 'none';
    }
}