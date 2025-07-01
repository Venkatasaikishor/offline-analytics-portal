'use client';

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const [insights, setInsights] = useState([]);
  const [filters, setFilters] = useState({
    userId: '',
    sessionId: '',
    page: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetchInsights();
  }, [filters]);

  const fetchInsights = async () => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/insights?${query}`);
    const data = await response.json();
    setInsights(data);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const chartData = {
    labels: insights.map(i => `${i.page}-${i.eventType}`),
    datasets: [{
      label: 'Event Count',
      data: insights.map(i => i.count),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Analytics Dashboard</h1>
      <div className="mb-4">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={filters.userId}
          onChange={handleFilterChange}
          className="mr-2 p-2 border"
        />
        <input
          type="text"
          name="sessionId"
          placeholder="Session ID"
          value={filters.sessionId}
          onChange={handleFilterChange}
          className="mr-2 p-2 border"
        />
        <input
          type="text"
          name="page"
          placeholder="Page"
          value={filters.page}
          onChange={handleFilterChange}
          className="mr-2 p-2 border"
        />
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="mr-2 p-2 border"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          className="mr-2 p-2 border"
        />
      </div>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}
