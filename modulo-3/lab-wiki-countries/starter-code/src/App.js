import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import CountryDetail from './routes/countryDetail.js';
import Header from './components/header/Header.js'
import CountriesList from './components/countrieslist/CountriesList.js';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <Header />
          <div class="container">
            <div class="row">
              <CountriesList />
              <Switch>
                {/* <Route exact path='/:id' component={CountryDetail}/> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
