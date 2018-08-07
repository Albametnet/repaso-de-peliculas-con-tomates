import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import {Switch, Route} from 'react-router-dom';

const url = "https://ghibliapi.herokuapp.com/films/";

class App extends Component {
  constructor(props) {
    super(props);

    this.filterMovies = this.filterMovies.bind(this);
    this.filterYear = this.filterYear.bind(this);

    this.state = {
      peliculas: [],
      titulo: '',
      year: 0
    }

  }

  filterMovies(e) {
    const resultado = e.currentTarget.value.toLowerCase();
    this.setState({
      titulo: resultado
    });
  }

  filterYear(e) {
    const resultado = parseInt(e.currentTarget.value, 10);
    this.setState({
      year: resultado
    });
  }

  componentDidMount() {
    this.pedirPeliculas();
  }

  pedirPeliculas() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peliculas: data
        });
      });
  }

  render() {

    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={ () => <Home titulo={this.state.titulo} year={this.state.year} peliculas={this.state.peliculas} filterMovies={this.filterMovies} filterYear={this.filterYear} />} /> 

        <Route path="/moviedetail/:id" render={(props) => <MovieDetail match={props.match} peliculas={this.state.peliculas} />} />
      </Switch>
        
      </div>
    );
  }
}

export default App;
