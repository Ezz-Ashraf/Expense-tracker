import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'


function Chart(props){

    const dataPointValues = props.dataPoints.map(dataPoint  => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)

    return (<div className="chart">
        {props.dataPoints.map((dataPoint) =>{
         return   <ChartBar key={dataPoint.label} value ={dataPoint.value} max={totalMax} label ={dataPoint.label}/>
        })}
    </div>)
} 
export default Chart;