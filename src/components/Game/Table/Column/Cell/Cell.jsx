import React from 'react';
import PropTypes from 'prop-types';
import cellStyle from './Cell.module.css';

const Field = ({ value, columnIndex, play }) => {
    let color = 'white';
    if (value === 1) {
        color = 'red';
    } else if (value === 2) {
        color = 'yellow';
    }
    return (
        <td>
            <div className={cellStyle.field} onClick={() => {play(columnIndex)}}>
                <div className={cellStyle[color]} />
            </div>
        </td>
    );
};

Field.propTypes = {
    value: PropTypes.number,
    columnIndex: PropTypes.number,
    play: PropTypes.func
};

export default Field;