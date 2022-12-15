import Cell from '../Cell/Cell';
import './Room.css'

export default function Room(props) {

    function renderCell(index) {
        const { x, y } = props.position;
        const pointer = String.fromCharCode(parseInt('2192', 16));
        const value = index === `${x}col${y}` ? pointer : null;
        const direction = value ? props.direction : null;
        return <Cell key={index} value={value} direction={direction}></Cell>
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            {
                arr.map((row) => (
                    <div key={row} className="row">
                        {
                            arr.map((col) => renderCell(`${row}col${col}`))
                        }
                    </div>
                ))
            }
        </div>
    );

}