import React from "react";
import Card from './Card';
import {Link} from 'react-router-dom';

class List extends React.Component {
  render() {
    return (
      <ul className="app__list">
          {this.props.peliculas
            .filter(item => {
              return item.title.toLowerCase().includes(this.props.filtroDeTitulo);
            })
            .filter(item=> {
              if (this.props.filtroDeFecha === 0) {
                return true;
              } else {
                return parseInt(item.release_date,10) === this.props.filtroDeFecha;
              }
            })
            .map(item=>{
            return (
              <li className="app__item" key={item.id}>
                <Link to={`/moviedetail/${item.id}`} ><Card item={item} /></Link>
              </li>
            );
          })}
        </ul>
    );
  }
}

export default List;