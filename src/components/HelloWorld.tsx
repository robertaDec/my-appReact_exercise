import * as React from 'react';
import HelloForm from './HelloForm';
import HelloContent from './HelloContent';
import Button from './Prova'
export class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
        this.handleChange = this.handleChange.bind(this)
    }

    public handleChange(event: any) : void {

        this.setState({ name: event.target.value });
    }

    public render() {
        return (
            <div style={{background: 'gold'}} className="col-md-3">
                <div className="col-md-3">
                <HelloForm
                    name = { this.state.name }
                    handleChange = { this.handleChange }
                />
                </div>
                <div className="col-md-3">
                <HelloContent
                    name = { this.state.name }
                />
            </div>
                <div className="col-md-3">
                <Button />
            </div>
            </div>
        );
    }
}
