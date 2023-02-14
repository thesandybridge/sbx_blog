"use client"

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
);

let chartData = {
    labels: [
        "Typescript",
        "HTML",
        "CSS",
        "Python",
        "Rust",
        "PHP",
    ],
    datasets: [
        {
            label: "Stats",
            data: [87, 95, 95, 76, 64, 80],
            fill: true,
            backgroundColor: 'rgba(40, 194, 100, 0.2)',
            borderColor: 'rgba(40, 194, 100, 1)',
            pointStyle: 'circle',
        }
    ]
}

let chartOptions = {
    scales: {
        r: {
            min: 0,
            max: 100,
            ticks: {
                display: false,
            },
            pointLabels: {
                color: "#3faa6d",
                font: {
                    size: 16,
                },
            },
            grid: {
                display: false,
            },
            angleLines: {
                display: false,
            },
        },
    },
    
}

export default function Stats() {
  return <Radar data={chartData} options={chartOptions} />
}
