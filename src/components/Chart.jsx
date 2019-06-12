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
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: numOfFalls,
      },
    ],
  };

  return (
    <div>
      <h2>Number of falls per decade</h2>
      <HorizontalBar data={data} />
    </div>
  );
};