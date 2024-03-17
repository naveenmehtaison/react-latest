import './Chart.css'
import './ChartBar.css'
import Chart from './Chart'
const ChartBar = (props) => {
    console.log(props,'chartBar')
    let barFillHeight = '0%';
    if(props.maxValue > 0)
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%';
    console.log(props)
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' 
                    style={{height: barFillHeight}}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}
export default ChartBar;