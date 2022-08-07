import React from 'react';
import PropTypes from 'prop-types';

function Buttonf({ children , type , version , isDisabled}) {
    return (
        <button type = {type} className = {`btn btn-${version}`} disabled = {isDisabled}>
            {children}
        </button>
    )
}

Buttonf.defaultProps = {
    type : 'button',
    version : 'primary',
    isDisabled : false
}

Buttonf.propTypes = {
    children : PropTypes.node.isRequired,
    type : PropTypes.string,
    version : PropTypes.string,
    isDisabled : PropTypes.bool
}

export default Buttonf;