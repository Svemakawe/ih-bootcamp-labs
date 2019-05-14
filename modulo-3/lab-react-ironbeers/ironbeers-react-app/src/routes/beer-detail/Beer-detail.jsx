import React, { Component } from 'react';
import './Beer-detail.css';
import axios from 'axios';
import OneBeerDetail from '../../components/one-beer-detail/One-beer-detail';
import HomeLink from '../../components/home-link/HomeLink';


class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({
        beer: response.data
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
  }

  render() {
    return (
      <div>
        <HomeLink />
        <OneBeerDetail beer={this.state.beer}/>
      </div>
    );
  }
}

export default BeerDetail;
