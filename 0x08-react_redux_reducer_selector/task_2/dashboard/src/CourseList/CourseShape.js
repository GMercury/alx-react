import propTypes from 'prop-types';
import React from 'react';

function CourseShape(id, name, credit) {

}

CourseShape.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    credit: propTypes.number.isRequired,
}

export default CourseShape;