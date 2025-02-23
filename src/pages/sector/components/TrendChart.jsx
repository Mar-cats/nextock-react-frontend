import ApexCharts from "apexcharts";
import { useEffect } from "react";
import { toDateLabel, toMarkerLabel } from "@/utils/string";

export default function () {
  const seriesData = [];
  const date = new Date();
  for (let i = 0; i < 30; i++) {
    seriesData.push({
      y: i + Math.floor(Math.random() * 5),
      x: date.getTime()
    });
    date.setDate(date.getDate() + 1);
  }
  const maxPoint = seriesData.reduce((max, point) =>
    point.y > max.y ? point : max
  );
  const minPoint = seriesData.reduce((min, point) =>
    point.y < min.y ? point : min
  );
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    series: [
      {
        name: "data",
        data: seriesData
      }
    ],
    stroke: {
      curve: "smooth",
      width: 1
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      tickAmount: 3,
      type: "datetime",
      labels: {
        formatter: toDateLabel
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      row: {
        colors: ["transparent"],
        opacity: 0.5
      }
    },
    fill: {
      type: "gradient",
      colors: ["#95A6FF"],
      gradient: {
        shade: "light",
        type: "vertical"
      }
    },
    annotations: {
      points: [
        {
          x: maxPoint.x,
          y: maxPoint.y,
          marker: {
            size: 6,
            fillColor: "#95A6FF",
            strokeColor: "#fff"
          },
          label: {
            style: {
              background: "#fff",
              color: "#333",
              borderRadius: 6,
              border: "none"
            }
          }
        },
        {
          x: minPoint.x,
          y: minPoint.y,
          marker: {
            size: 6,
            fillColor: "#95A6FF",
            strokeColor: "#fff"
          },
          label: {
            style: {
              background: "#fff",
              color: "#333",
              borderRadius: 6,
              border: "none"
            }
          }
        }
      ]
    }
  };
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);
  return <div id='chart'></div>;
}
