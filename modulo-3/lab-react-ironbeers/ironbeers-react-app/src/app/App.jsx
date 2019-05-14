import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from '../routes/home/Home';
import Beers from '../routes/beers/Beers';
import RandomBeer from '../routes/random-beer/Random-beer';
import NewBeer from '../routes/new-beer/New-beer';
import BeerDetail from '../routes/beer-detail/Beer-detail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      beerState: false,
    };
    this.addBeer = this.addBeer.bind(this);
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
          beerState: true,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  addBeer(beer) {
    this.state.beers.push(beer);
    this.setState({
      beers: this.state.beers,
    });
  }

  render() {
    const { beers, beerState } = this.state;
    if (beerState) {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random-beer" render={() => <RandomBeer beers={beers} />} />
            <Route exact path="/new-beer" render={() => <NewBeer addBeer={this.addBeer}/>} />
            <Route exact path="/beer-detail/:id" component={BeerDetail} />
          </Switch>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
