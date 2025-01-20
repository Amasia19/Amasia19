import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Casques', value: 400 },
  { label: 'Laptop', value: 300 },
  { label: 'Phones', value: 500 },
  { label: 'Sub', value: 200 },
  { label: 'Ecouteurs', value: 278 },
];

export default function AnimatedPieChart() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 2); 
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <PieChart
      series={[
        {
          startAngle: angle,
          endAngle: angle + 360,
          data,
        },
      ]}
      height={200}
      width={400}
    />
  );
}
