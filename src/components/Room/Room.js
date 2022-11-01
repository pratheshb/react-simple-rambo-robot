import React from 'react';
import Cell from '../Cell/Cell';
import './Room.css'
export default class Room extends React.Component {
    renderCell(index) {
        const { x, y } = this.props.position;
        const pointer = String.fromCharCode(parseInt('2192', 16));
        const value = index === `${x}col${y}` ? pointer : null;
        const direction = value ? this.props.direction : null;
        return <Cell key={index} value={value} direction={direction}></Cell>
    }
    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const room = arr.map((row) => (
            <div key={row} className="row">
                {
                    arr.map((col) => this.renderCell(`${row}col${col}`))
                }
            </div>
        ));
        return (
            <div>
                {room}
            </div>
        )
    }
}