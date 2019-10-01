import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell/Cell';

const Column = ({ column, play }) => {
    return (
        <tr>
            {column.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
        </tr>
    );
};

Column.propTypes = {
    column: PropTypes.number,
    play: PropTypes.func
};

export default Column;