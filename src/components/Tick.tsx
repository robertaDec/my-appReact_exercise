import * as React from 'react';
/**
 * Created by roberta.de on 2017-07-12.
 */
export class Tick extends React.Component<any, any> {
private timerID: any;
private interval: any;

//toKnow: The only place where you can assign this.state is the constructor.

    constructor(props:any ) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tock(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tock()  {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return <div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    }
}
setInterval(Tick, 1000);

export default Tick;