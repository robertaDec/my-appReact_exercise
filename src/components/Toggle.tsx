/**
 * Created by roberta.de on 2017-07-13.
 */
import * as React from 'react';

export class Toggle extends React.Component<any, any> {
    private isToggleOn: any;

    constructor(props: any) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
    }
}

export default Toggle;