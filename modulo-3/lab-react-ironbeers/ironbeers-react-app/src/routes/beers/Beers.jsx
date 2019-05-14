import React, { Component } from 'react';
import './Beers.css';
import axios from 'axios';
import Beer from '../../components/beer/Beer';
import HomeLink from '../../components/home-link/HomeLink';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      beers: [],
    };
    this.getBeers = this.getBeers.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getBeers() {
    axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${this.state.name}`)
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  componentDidMount() {
    this.getBeers();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.getBeers();
    });
  }

  render() {
    const listBeers = this.state.beers.map((beer, idx) => {
      return <Beer img={beer.image_url} name={beer.name} tagline={beer.tagline} contributed={beer.contributed_by} id={beer._id} keyCode={idx}/>;
    });

    return(
      <div>
        <HomeLink />
        <div className="search-form-container">
          <label htmlFor="name">Search for Beers</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          {listBeers}
        </div>
      </div>
    );
  }
}

export default Beers;
