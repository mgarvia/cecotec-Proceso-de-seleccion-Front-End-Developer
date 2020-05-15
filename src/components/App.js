import React from 'react';
import Login from './Login';
import Crud from './Crud.';

// import logo from '../logo.svg';
import '../stylesheets/App.scss';
import fetchData from '../services/fetchData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data
        })
      })
    console.log(this.state.data)
  }
  render() {
    return (
      <div className="App">
        <Login />
        {/* <Crud /> */}
      </div>
    );
  }
}

export default App;
