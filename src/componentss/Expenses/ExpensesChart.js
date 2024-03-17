import Chart from '../Chart/Chart'
const ExpensesChart=props=>{
    console.log('im in props', props)
    const chartDataPoints =[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'march',value:0},
        {label:'april',value:0},
        {label:'may',value:0},
        {label:'june',value:0},
        {label:'july',value:0},
        {label:'august',value:0},
        {label:'sept',value:0},
        {label:'oct',value:0},
        {label:'nov',value:0},
        {label:'dec',value:0},
    ]
    for(const expense of props.expenses){
        console.log(expense.expenseDate,'1naveen in props.expense')
        const expenseMonth = expense.expenseDate.getMonth()
        console.log(expenseMonth,'expensemonth')
        chartDataPoints[expenseMonth].value+=expense.expenseAmount
        console.log(chartDataPoints,'chartdatapoints')

    }

    return <Chart dataPoints={chartDataPoints}/>
}
export default ExpensesChart