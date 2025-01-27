import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  const [data, setData] = useState([
    { data: [25, 23], color: '#bdbaba' },
    { data: [40, 30], color: '#d1c40c' },
    { data: [60, 60], color: '#c51f9c' },
    { data: [20, 40], color: '#40aabd' },
    { data: [45, 30], color: '#30b130' },
  ]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setData((prevData) =>
  //       prevData.map((series) => ({
  //         ...series,
  //         data: series.data.map((value) => value + Math.floor(Math.random() * 5 - 2)), 
  //       }))
  //     );
  //   }, 2000); 

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <BarChart
      series={data}
      height={150}
      width={290}
      xAxis={[{ data: ['Janv', 'Fevrier'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 20, right: 10 }}
      skipAnimation
    />
  );
}
