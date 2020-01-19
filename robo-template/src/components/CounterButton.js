import React , {Component} from 'react';


class CounterButton extends Component {
    state = {
        counter : 0
    }

    render()
    {
        return (
            <button
                id="counter"
                color={this.props.color}
                onClick={() => this.setState(state => ({counter : state.counter+1}))} >
                    Count : {this.state.counter}
            </button>

        )
    }
}

export default CounterButton;