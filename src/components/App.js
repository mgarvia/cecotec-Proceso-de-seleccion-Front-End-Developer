import React from 'react';
import Login from './Login';
import Crud from './Crud.';

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
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Login 
        data={data}
        />
        {/* <Crud /> */}
      </div>
    );
  }
}

export default App;
