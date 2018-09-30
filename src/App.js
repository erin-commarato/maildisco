import React, {Component} from 'react';
import api from './lib/api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'welcome', // welcome or inventory
      email: ''
    };
  }

  handleChange = event => {
    this.setState({email: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const fetchMail = api.fetchMailbox(this.state.email);
    console.log(fetchMail);
  };

  renderWelcome() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Maildisco!</h1>
          <p>
            Create a new mailbox to start collecting spam treasure or check an existing mailbox.
          </p>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
            @maildis.co
          </label>
          <input type="submit" value="Go!" />
        </form>
      </div>
    );
  }

  renderInventory() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        <p>TBD</p>
      </div>
    );
  }

  render() {
    const {view} = this.state;
    switch (view) {
      case 'inventory':
        return this.renderInventory();
      default:
        return this.renderWelcome();
    }
  }
}

export default App;
