import React , {Component} from 'react';
// high order component that return another component
export default function asyncComponent(importedComponent)
{
    class AsyncComponent extends Component{
        state = {
            component : null
        }
        async componentDidMount()
        {
            const {default : component} = await importedComponent();
            this.setState({component : component});
        }
        render()
        {
            let Component = this.state.component || null;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}