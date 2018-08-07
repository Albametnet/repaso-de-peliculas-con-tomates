import React from "react";
import Card from './Card';
import {Link} from 'react-router-dom';

class MovieDetail extends React.Component {
  render() {

    if (this.props.peliculas.length >= 1) {
      const filtroID = this.props.match.params.id;
      const peliculas = this.props.peliculas;

      const peli = this.props.peliculas.filter(item => {
        return item.id === filtroID;        
      });

      const miPeli = peli[0];

      return (
        <React.Fragment>
          <Link to="/" className="back-btn">Volver :)</Link>
          <Card item={miPeli} />
        </React.Fragment>
       );
    } else {
      return (
        <p>😱</p>
      );
    }
    
    

    
  }
}

export default MovieDetail;