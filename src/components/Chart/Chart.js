import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let m=0;
    const dataV=props.dataPoints.map(d=>d.value);
    m=Math.max(...dataV)

    return (
        <div className="chart">
            {props.dataPoints.map((el) => (
                <ChartBar key={el.label} value={el.value} maxValue={m} label={el.label} />
            ))}
        </div>
    );
};

export default Chart;
