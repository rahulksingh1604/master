import { Component } from "react";

class ClassComponent extends Component {
    state = {
        increment: 0
    }

    incrementFunc = () => {
        this.setState({ increment: this.state.increment + 1 });
    }

    render() {
        return (
            <>
                <h1> Incremented Value : {this.state.increment}</h1>
                <button onClick={this.incrementFunc}>Increment Value</button>
            </>
        );
    }
}

export default ClassComponent;