import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

export default function BarChart() {
  const data = {
    labels: ["5","9","13","15","17","19","21","23","25","27"],
    datasets: [
      {
        // label: "Data Series 1",
        backgroundColor: "hsl(226, 97%, 72%)",
        borderWidth: 1,
        data: [12, 10, 22, 5, 20,21,8,18,7,5]
      },
      {
        // label: "Data Series 1",
        backgroundColor: "hsl(226, 97%, 72%)",
        borderWidth: 1,
        data: [15, 13, 20, 8, 17,23,10,15,10,8]
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        // left: 5,
        // right: 5,
        // top: 10,
        // bottom: 5
      },
      margin: {
        // left: 5,
        // right: 5,
        // top: 5,
        // bottom: 5
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true // Display grid lines for the y-axis
        },
        ticks: {
          padding: 15
        }
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false // Display grid lines for the y-axis
        },
        ticks: {
          padding: 0
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 40,
        borderWidth: 0.7,
        
      }
    }
  };

  return (
    <div className="">
      <Bar data={data} options={options} />
    </div>
  );
}
