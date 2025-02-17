// Chart.js
import "./Chart.scss";
type Chart = {
  title:string,
  imageSrc:string,
}

function Chart({ title, imageSrc, }) {
  return (
    <div className="chart">
      <img src={imageSrc} alt={title} className="chart-image" />
      <h3>{title}</h3>
    </div>
  );
}

export default Chart;
