import React from "react";
import List from './List';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="app__header">
          <ul className="filters">
            <li className="filter">
              <div className="filter__item">
                <label htmlFor="f_title" className="filter__label">Título</label>
                <input type="text" id="f_title" name="f_title" onChange={this.props.filterMovies} />
              </div>
            </li>
            <li className="filter">
            <label htmlFor="f_year" className="filter__label">Año</label>
            <select name="f_year" id="f_year" onChange={this.props.filterYear}>
              <option value="">Elige un año</option>
              {this.props.peliculas.map((item, index)=> {
                return <option value={item.release_date} key={index}>{item.release_date}</option>
              })}
            </select>
            </li>
          </ul>
        </header>
        <List peliculas={this.props.peliculas} filtroDeTitulo={this.props.titulo} filtroDeFecha={this.props.year} />
      </React.Fragment>
    );
  }
}

export default Home;