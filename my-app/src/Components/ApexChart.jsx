import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import getNewSeries from './getNewSeries'; // Import the mock data fetching function

const XAXISRANGE = 60 * 1000; // Assuming XAXISRANGE is defined somewhere

const ApexChart = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [options] = useState({
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Dynamic Updating Chart',
      align: 'right'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: true
    },
    
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = getNewSeries(); // Generate new data point
      setSeries(prevSeries => [{ data: [...prevSeries[0].data, newData] }]); // Update series with new data
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="chart" className='chart' style={{background:"black"}}>
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
