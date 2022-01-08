import React, {Component} from 'react'
import budget from '../budget.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the budget App!</h1>
                <img src={budget} alt="Logo"/>
            </div>
        )
    }
}
