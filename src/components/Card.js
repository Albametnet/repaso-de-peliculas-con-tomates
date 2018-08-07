import React from "react";

class Card extends React.Component {

  tom() {
    const maxTomatoes = 95;
    const tomicon = '🍅';
    const score = this.props.item.rt_score;

    if (parseInt(score,10) >= maxTomatoes) {
      return <div className="card__rt-score">{this.props.item.rt_score} {tomicon}</div>;
    } else {
      return <div className="card__rt-score">{this.props.item.rt_score}</div>
    }
  }
  render() {
    return (
      <div className="card">
        <h2 className="card__title">{this.props.item.title} <small className="card__title-year">({this.props.item.release_date})</small></h2>
        {this.tom()}
      </div>
    );
  }
}

export default Card;