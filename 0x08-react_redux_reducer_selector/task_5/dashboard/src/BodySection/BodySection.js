import React from 'react';

class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='bodySection'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default BodySection;