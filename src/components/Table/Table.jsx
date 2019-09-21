import React from 'react';
import Column from "../Column/Column";
import PropTypes from 'prop-types';

const Table = ({board, message, initGame, play}) => {
    return (
        <div>
            <p className="message">{message}</p>
            <div className="button" onClick={() => {initGame()}}>Начать новую</div>
            <table>
                <thead>
                </thead>
                <tbody>
                {board.map((column, i) => (<Column key={i} column={column} play={play} />))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    board: PropTypes.array,
    message: PropTypes.string,
    initGame: PropTypes.func,
    play: PropTypes.func,
};

export default Table;