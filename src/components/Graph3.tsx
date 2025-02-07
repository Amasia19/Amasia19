import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490 ];
const pData = [2400, 1398, 800, 3908, 4000, 3800, 4300];
const amtData = [2400, 2210, 8000, 2000, 2181, 2500, 2100];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BasicLineChart() {
  return (
    <LineChart
      width={290}
      height={200}
    
      series={[
        { data: uData, label: 'Laptop', area: true, stack: 'total', showMark: false ,color: '#d1c40c'},
        { data: pData, label: 'Casques', area: true, stack: 'total', showMark: false ,color: ' #4CAF50'},
        {
          data: amtData,
          label: 'Phones',
          area: true,
          stack: 'total',
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}
