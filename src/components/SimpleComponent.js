// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
    constructor() {
        super();

        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        const newMood = (this.state.mood === 'happy' ? 'sad' : 'happy')
        this.setState({mood: newMood})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}

export default SimpleComponent