import React from "react";
import Chart from '../charts/Chart'
function ExpensesChart(props){
const chartDataPoints = [{
    label:'Jan',value:0
},{
    label:'Feb',value:0
},{
    label:'Mar',value:0
},{
    label:'April',value:0
},{
    label:'May',value:0
},{
    label:'Jun',value:0
},{
    label:'Jul',value:0
},{
    label:'Aug',value:0
},{
    label:'Sep',value:0
},{
    label:'Oct',value:0
},{
    label:'Nov',value:0
},{
    label:'Dec',value:0
}];
console.log(props.expenses)
for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth() //Months start at 0(Jan)
    chartDataPoints[expenseMonth].value +=expense.price
}

    return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart