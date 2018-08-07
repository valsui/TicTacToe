import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../Board/board';
// import './index.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        //for time travel implementation
        // this.state = {
        //     history: [{
        //         squares: Array(9).fill(null)
        //     }],
        //     xNext: true
        // }
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;