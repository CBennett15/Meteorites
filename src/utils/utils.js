export const filterMeteorites = (data) => {
  const filteredData = data.filter((meteorite) => {
    return (
      meteorite.fall === 'Fell' &&
      meteorite.year.slice(0, 4) > 1900 &&
      meteorite.year.slice(0, 4) < 2000
    );
  });

  return filteredData;
};

export const sortMeteorites = (filteredData) => {
  let formattedData = {
    date00s: [],
    date10s: [],
    date20s: [],
    date30s: [],
    date40s: [],
    date50s: [],
    date60s: [],
    date70s: [],
    date80s: [],
    date90s: [],
  };

  filteredData.forEach((meteorite) => {
    if (meteorite.year.slice(0, 4) < 1910)
      formattedData.date00s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1920)
      formattedData.date10s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1930)
      formattedData.date20s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1940)
      formattedData.date30s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1950)
      formattedData.date40s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1960)
      formattedData.date50s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1970)
      formattedData.date60s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1980)
      formattedData.date70s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 1990)
      formattedData.date80s.push(meteorite);
    else if (meteorite.year.slice(0, 4) < 2000)
      formattedData.date90s.push(meteorite);
  });

  return formattedData;
};
