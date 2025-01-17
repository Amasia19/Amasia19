import Chart from "./Chart";
type StatsProps = {
  stats: {
    title: string;
    imageSrc: string;
  }[];
};

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <Chart key={index} title={stat.title} imageSrc={stat.imageSrc} />
      ))}
    </div>
  );
};

export default Stats;
