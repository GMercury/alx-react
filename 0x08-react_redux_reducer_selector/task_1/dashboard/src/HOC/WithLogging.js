import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    const loggingName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class NewComponent extends Component{
        componentDidMount() {
            console.log(`Component ${loggingName} is mounted.`);
        }

        componentWillUnmount() {
            console.log(`Component ${loggingName} is going to unmounted`)
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
    NewComponent.displayName = `WithLogging ${loggingName}`;
    return NewComponent;
}

export default WithLogging;