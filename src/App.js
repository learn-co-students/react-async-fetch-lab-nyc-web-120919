// create your App component here
import React, { Component } from 'react';

class App extends React.Component {
    state = {
        astros: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(data => 
            this.setState({astros: data}))
    }

    render () {
        return <div> {this.state.astros} </div>
    }
}

export default App;