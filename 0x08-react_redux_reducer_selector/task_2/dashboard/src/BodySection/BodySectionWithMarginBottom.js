import React from 'react';
import BodySection from './BodySection';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props}/>
            </div>
            )
    }
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: 40
    }
})

BodySectionWithMarginBottom.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.element
    ])
}

export default BodySectionWithMarginBottom;