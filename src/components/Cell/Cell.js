import './Cell.css';
function Cell(props) {
    let pointer = null;
    let cellClass = 'cell';
    if (props.value) {
        pointer = <div className={`rotate-${props.direction}`}>
            {props.value}
        </div>
        cellClass += ' enlarge';
    }
    return (
        <div className={cellClass}>
            {pointer}
        </div>
    );
}

export default Cell;