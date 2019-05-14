import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './beer-form.css';
import axios from 'axios';

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
      created: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      created: false,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', this.state)
      .then((response) => {
        this.props.addBeer(this.state);
        this.setState({
          name: '',
          tagline: '',
          description: '',  
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
          created: true,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    if (this.state.created) {
      return (
        <Redirect to="/" />
      );
    } else {
      return (
        <div>
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="tagline">Tagline</label>
              <input type="text" id="tagline" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea type="text" id="description" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="first_brewed">First Brewed</label>
              <input type="text" id="first_brewed" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="brewers_tips">Brewers Tips</label>
              <input type="text" id="brewers_tips" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="attenuation_level">Attenuation Level</label>
              <input type="number" id="attenuation_level" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div>
              <label htmlFor="contributed_by">Contributed By</label>
              <input type="text" id="contributed_by" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)}/>
            </div>
            <button type="submit">Create Beer</button>
          </form>
        </div>
      );
    }
  }
}

export default BeerForm;
