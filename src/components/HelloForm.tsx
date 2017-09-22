import * as React from 'react';

export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props: IHelloFormProps) {
        super(props);
    }

     render() {
        return (
            <div >
                <textarea
                    value={ this.props.name }
                    onChange={ e => this.props.handleChange(e) }
                    style={{background: "yellow", color: "light"}}
                />
            </div>

        );
    }
}
