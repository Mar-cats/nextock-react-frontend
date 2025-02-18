import ApexCharts from "apexcharts";
import { useEffect } from "react";

export default function () {
  var options = {
    chart: {
      type: "area",
      toolbar: {
        show: false
      }
    },
    series: [
      {
        name: "sales",
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ],
    stroke: {
      curve: "smooth"
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical"
      }
    }
  };

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);
  return <div id="chart"></div>;
}
