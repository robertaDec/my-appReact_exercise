/**
 * Created by roberta.de on 2017-07-12.
 */
import * as React from 'react';
import Toggle from './Toggle'
export class Greetings extends React.Component<any, any> {

    public greet(){
        if(this.props.loggedIn){
            return(
                <span>
                  <button>{ `Welcome Back ${ this.props.name }` }</button>
                  <p>You can visit settings to reset your password</p>
                </span>
            );
        } else {
            return (
                <h4>Hey man! Log in to see this section</h4>
            );
        }
    }

handleLginClick = function () {
            return 'ciao';
}
    public render(){
        return (
            <div style={{background:'lightblue'}}>

                <h3>My React App</h3>
                <button>{ this.greet() }</button>
                <button onClick={this.handleLginClick}>ciao</button>
                <Toggle />
            </div>
        )
    }

}