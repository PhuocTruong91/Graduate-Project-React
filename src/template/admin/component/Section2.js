import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Section2(props) {
    const listTracking = props.listTracking;

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
    );

    var options = {
        responsive: true,
    };

    var labels = [];
    listTracking.map((item) => {
        labels.push(new Date(item.date_create).toLocaleDateString());
    })
    const data = {
        labels,
        datasets: [
          {
            label: '',
            data: labels.map((item,index) => listTracking[index].data_total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };

    const data2 = {
        labels,
        datasets: [
          {
            label: '',
            data: labels.map((item,index) => listTracking[index].insert_total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };

    const data3 = {
        labels,
        datasets: [
          {
            label: '',
            data: labels.map((item,index) => listTracking[index].update_total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };

    return ( 
        <section className="daily-data">
            <p className='section-title'>Biểu đồ dữ liệu theo ngày</p>
            <Line options={options} data={data} /> 
        </section>
    );
}

export default Section2;