import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  series: ApexOptions["series"];
  categories: string[] | number[];
}

export default function SampleLine(props: Props) {
  const { series, categories } = props;

  const options: ApexOptions = {
    chart: {
      id: "line",
      background: "#2E2E2E",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: categories, //will be displayed on the x-asis
    },
    dataLabels: {
      enabled: false,
    },

    theme: {
      mode: "dark",
      //palette: "palette1"
    },
    grid: {
      borderColor: "white",
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    legend: {
      show: false,
    },

    stroke: {
      curve: "straight",
      colors: ["#FFCC21", "#8FE9D0"],
    },
    markers: {
      size: 4,
      colors: ["#FFCC21", "#8FE9D0"],
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "darken",
          value: 0.15,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "darken",
          value: 0.35,
        },
      },
    },
  };
  return (
    <div>
      <Chart
        options={options}
        type="line"
        series={series}
        width="100%"
        height={"316px"}
      />
    </div>
  );
}
