import { useState} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Casques', value: 400,color: ' #4CAF50' },
  { label: 'Laptop', value: 300, color: '#d1c40c' },
  { label: 'Phones', value: 500 },
  { label: 'Sub', value: 200 ,color: '#40aabd'},
  { label: 'Ecouteurs', value: 278,color: '#bdbaba' },
];

export default function AnimatedPieChart() {
  const [angle] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAngle((prev) => prev + 2); 
  //   }, 500); 
  //   return () => clearInterval(interval);
  // }, []);

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
