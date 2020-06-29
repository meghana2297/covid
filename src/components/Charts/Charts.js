import React, { Component } from 'react';
import './chart.css'
import { Bar } from 'react-chartjs-2';
class Charts extends Component {

    render() {
        console.log(this.props.data)
        const { confirmed, recovered, deaths } = this.props.data
        const data = {
            labels: ['Confirmed', 'Recovered','Deaths'],
            datasets: [
                {
                    
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: ['rgba(3,57,108)', 'rgba(100,151,177)', 'rgba(179,205,224)'],
                    borderColor: ['rgba(3,57,108)', 'rgba(100,151,177)', 'rgba(179,205,224)'],
                    borderWidth: 1,
                    hoverBackgroundColor: ['rgba(3,57,108,0.4)', 'rgba(100,151,177,0.4)', 'rgba(179,205,224,0.4)'],
                    hoverBorderColor: ['rgba(3,57,108,1)', 'rgba(100,151,177,1)', 'rgba(179,205,224,1)'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }
            ]
        }
        const options = {
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "#FFFFFF", // this here
                    },
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "#FFFFFF", // this here
                    },
                }],
            },
                legend: { display: false },
            
        }
        return (
            <div className="chart" >
                <Bar data={data} options={options}
                    
                />
            </div>
        );
    }
}
export default Charts;
