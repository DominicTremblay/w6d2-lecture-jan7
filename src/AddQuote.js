import React, { Component } from 'react';

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFrm: false,
      quote: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const quote = this.state.quote;
    this.props.addQuote(quote);
    this.setState({ quote: '' });
  };

  handleChange = event => this.setState({ quote: event.target.value });

  handleClick = event => {
    this.setState({ displayFrm: true });
  };

  render() {
    const frm = this.state.displayFrm ? (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newquote"
          placeholder="Add your quote"
          value={this.state.quote}
          onChange={this.handleChange}
        />
        <input className="btn btn-primary" type="submit" value="Add Quote" />
      </form>
    ) : (
      <button className="btn btn-primary" onClick={this.handleClick}>
        Add Quote
      </button>
    );

    return <React.Fragment>{frm}</React.Fragment>;
  }
}

export default AddQuote;
