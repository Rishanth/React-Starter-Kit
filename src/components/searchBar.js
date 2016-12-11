import React, { Component, PropTypes } from 'react';

// const searchBar = () => (
  // <input />   //  React.create Element when this is turned into plain javascript
 // );
class searchBar extends Component {

  static propTypes = {
    onSearchTermChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    console.log('heta');
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="searchBar">
        <input onChange={(event) => this.onInputChange(event.target.value)} />
      </div>);
  }
  }
export default searchBar;
