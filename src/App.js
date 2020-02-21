// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(people => {
                console.log(people)
                this.setState({ people })
            })
    }

    render() {
        return this.state.people.map(person => <li>{people.name}</li>)
    }
}