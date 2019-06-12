import React, { Component } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Chart } from './components/Chart';
import Axios from 'axios';
import { filterMeteorites, sortMeteorites } from './utils/utils';
import { MeteoriteList } from './components/Meteoritelist';

class App extends Component {
  state = {
    meteorites: null,
    fallen: null,
    year: null,
    dateRange: null,
  };
  componentDidMount = () => {
    this.fetchMeteorites();
  };
  componentDidUpdate = () => {};
  render() {
    return (
      <div className="App">
        <Title />

        <select className="selector" onChange={this.changeDecade}>
          <option value="date00s">1900-1909</option>
          <option value="date10s">1910-1919</option>
          <option value="date20s">1920-1929</option>
          <option value="date30s">1930-1939</option>
          <option value="date40s">1940-1949</option>
          <option value="date50s">1950-1959</option>
          <option value="date60s">1960-1969</option>
          <option value="date70s">1970-1979</option>
          <option value="date80s">1980-1989</option>
          <option value="date90s">1990-1999</option>
        </select>
        {this.state.year && <Chart years={this.state.year} />}
        {this.state.dateRange && this.state.year && (
          <MeteoriteList
            dateRange={this.state.dateRange}
            year={this.state.year}
          />
        )}
      </div>
    );
  }
  fetchMeteorites = () => {
    const meteoritesURL = 'https://data.nasa.gov/resource/y77d-th95.json';
    Axios.get(meteoritesURL).then(({ data }) => {
      const filteredMeteorites = filterMeteorites(data);
      const sortedMeteorites = sortMeteorites(filteredMeteorites);

      this.setState({
        meteorites: filterMeteorites,
        year: sortedMeteorites,
      });
    });
  };
  changeDecade = (event) => {
    event.preventDefault();
    console.log('here');
    this.setState({ dateRange: event.target.value });
  };
}

export default App;
