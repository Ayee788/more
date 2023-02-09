    import React, { Component } from 'react'

    export class PersonCard extends Component {
        constructor(props) {
            super(props)
            this.state = {
            birthDay : this.props.age
            }
        }
    render() {
        const {firstName,lastName,age,hairColor } = this.props;
        return (
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.birthDay}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={() => this.setState({birthDay: this.state.birthDay + 1})}>birthday button for {firstName} {lastName}</button>
        </div>
        )
    }
}
    

    export default PersonCard