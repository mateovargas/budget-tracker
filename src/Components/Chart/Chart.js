import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar';

const Chart = props => {
    
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    
    return (<div className="chart">
            {props.dataPoints.map((dataPoint) => {
                console.log(dataPoint.value);
                return (<ChartBar 
                    key={dataPoint.id} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                />)
            })}
        </div>);
}

export default Chart;