import React from 'react';
import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {

    const styles = {
        backgroundColor : bgColor,
        color : textColor
    }

    return (
        <header style={styles}>
            <div className="container">
            <h1>{text}</h1>
            {/* <h2>{comment}</h2> */}
            </div>
        </header>
    )
}

Header.defaultProps = {
    text : "Feedback UI",
    comment : "Leave Your Rating",
    bgColor : 'crimson',
    textColor : 'black'
}

Header.propTypes = {
    text : PropTypes.string.isRequired
}

export default Header;