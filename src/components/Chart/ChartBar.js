import "./ChartBar.css";

const ChartBar = (props) => {
    let heightP='0%'
    if(props.maxValue>0){
        heightP=Math.round(props.value*100/props.maxValue)+'%'
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:heightP}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
