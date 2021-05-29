import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {

  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value); //Translates the array of objects to a single array consisting of the values

  let totalMaximum = Math.max(...valueArray); //Use spread operator to spread the value in the array as an argument for the Math.max function

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
          maxValue={totalMaximum}
        />;
      })}
    </div>
  );
};

export default Chart;
