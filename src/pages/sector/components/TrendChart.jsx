import ApexCharts from "apexcharts";
import { useEffect } from "react";
import { toDateLabel } from "@/utils/string";
import { Flex } from "@chakra-ui/react";

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
      type: "category",
      tickPlacement: "between",
      tickAmount: 3,
      labels: {
        offsetX: 3,
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
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<span class="graph-tooltip">${series[seriesIndex][dataPointIndex]}</span>`;
      }
    }
  };
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <Flex w={"100%"}>
      <div id='chart'></div>
      <style jsx>{`
        #chart {
          width: 100%;
          overflow: visible;
        }
        .graph-tooltip {
          background: var(--color-color-white);
          color: var(--color-color-black);
          padding: 8px;
          border-radius: 6px;
        }
        .apexcharts-text.apexcharts-xaxis-label {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: -0.25px;
          color: var(--color-gray-800);
        }
        .apexcharts-text.apexcharts-xaxis-label > tspan:first-child {
          font-weight: 600;
        }
      `}</style>
    </Flex>
  );
}
