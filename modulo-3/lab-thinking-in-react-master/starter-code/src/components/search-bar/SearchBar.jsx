import React, { Component } from 'react';
import './SearchBar.css';
import ProductList from '../product-list/ProductList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stocked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleChangeCheckbox() {
    this.setState({
      stocked: !this.state.stocked,
    });
  }

  render() {
    const { name, stocked } = this.state;
    
    return (
      <div>
        <p>Search</p>
        <input className="input-text" type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <div>
          <input type="checkbox" name="stocked" id="stocked" checked={this.state.stocked} onChange={() => this.handleChangeCheckbox()} />
          <label htmlFor="stocked">Only Show Products on Stock</label>
        </div>
        <div className="table-container">
          <ProductList data={this.props.data} name={name} stocked={stocked}/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
