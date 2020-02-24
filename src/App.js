// create your App component here
import React from 'react' 
import { render } from 'enzyme'

export default class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount(){
        console.log("mounting")
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(info => {
                this.setState({
                    people: info.people
                })
            })
    }


    render() {
        return(
            <div>
                {this.state.people.map(person => person.name)}
            </div>
        )
    }


}