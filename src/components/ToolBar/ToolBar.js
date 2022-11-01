import './ToolBar.css'

function ToolBar(props) {
  const warning = props.warn;
  return (
    <div className="toolbar">
      <span>
        <button id="move" className="move" onClick={props.onClick}>Move</button>
        <button id="turn" className="turn" onClick={props.onClick}>Turn</button>
        <button id="reset" className="reset" onClick={props.onClick}>Reset</button>
      </span>
      <span className="warn">
      { warning }
      </span>
    </div>
  );
}

export default ToolBar;