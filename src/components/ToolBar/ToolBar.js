import './ToolBar.css'

function ToolBar(props) {
  return (
    <div className="toolbar">
      <span>
        <button id="move" className="move" onClick={props.onMove}>Move</button>
        <button id="turn" className="turn" onClick={props.onTurn}>Turn</button>
        <button id="reset" className="reset" onClick={props.onReset}>Reset</button>
      </span>
      <strong className="warn">
      { props.warn }
      </strong>
    </div>
  );
}

export default ToolBar;