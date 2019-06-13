import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export const Chart = ({ years }) => {
  const yearObj = years;
  const yearKeysArray = Object.keys(yearObj);
  const numOfFalls = yearKeysArray.map((year) => {
    return yearObj[year].length;
  });

  const data = {
    labels: yearKeysArray,
    datasets: [
      {
        label: 'Meteorite Falls',
       
        backgroundColor: 'rgba(214,110,129,0.8)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: numOfFalls,
      },
    ],
  };
const options = {
  legend: {
    labels: {
    fontColor: 'white',
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: 'white'
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          fontColor: 'white'
        }
      }
    ]
  }
};

  return (
    <div>
      <h2 className="text-light">Number of falls per decade</h2>
      <HorizontalBar data={data} options={options}/>
    </div>
  );
};
