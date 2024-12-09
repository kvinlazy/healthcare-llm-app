import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Messages", "Response Time", "Referrals"],
    datasets: [
      {
        label: "Metrics",
        data: [20, 5, 7],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Communication Metrics",
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
