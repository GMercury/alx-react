import PropTypes from 'prop-types';

function NotificationItemShape(id, __html, type, value) {}

NotificationItemShape.PropTypes = {
    id: PropTypes.number.isRequired,
    __html: PropTypes.shape({
        html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default NotificationItemShape;