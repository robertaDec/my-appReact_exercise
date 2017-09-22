import * as React from "react";
import * as ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Hello } from "./components/Hello";
import { HelloWorld } from './components/HelloWorld';
import { Button } from './components/Prova';
import { Tick } from './components/Tick';
import {Greetings} from './components/Greetings'
import {Toggle} from './components/Toggle'

class Main extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div >
                <HelloWorld  defaultName='World' />
            </div>
        );
    }
}
 let numbers = [1, 2, 3, 4, 5];
let listItems = numbers.map((number) =>
    <li>{number}</li>
);


ReactDOM.render(
    <div>
        <Main />
        <Main />
        <Hello compiler="TypeScript" framework="React" />
        <Hello />
        <Button name="Roberta" />
        <Tick />
        <Greetings />
        <Toggle />
        <ul>{listItems}</ul>
    </div>,
    document.getElementById("root")
);


