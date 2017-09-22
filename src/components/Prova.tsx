/**
 * Created by roberta.de on 2017-07-12.
 */
import * as React from 'react';

export class Button extends React.Component<any, any>  {
    render(){
        return <div>
                <button>check</button>
                <h3>{this.props.name}</h3>
        </div>

    }
}
export default Button;