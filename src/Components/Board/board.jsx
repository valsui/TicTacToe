import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../Square/square';
// import './index.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xNext: true 
        }

        this.markSquare = this.markSquare.bind(this);
        this.validWinner = this.validWinner.bind(this);
        this.findWinner = this.findWinner.bind(this);
    }

    markSquare(i){
        const squares = this.state.squares.slice();
        if(this.findWinner() || squares[i]) return;
        if(this.state.xNext && !squares[i]){
            squares[i] = 'X'; 
        } else if (!this.state.xNext && !squares[i]){
            squares[i] = 'O';
        }
        this.setState({ 
            squares: squares,
            xNext: !this.state.xNext
         });
    }

    validWinner(a,b,c){
        if(this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]){
            return this.state.squares[a];
        }else{
            return null;
        }
    }

    findWinner(){
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        //use for loop to loop through all the winning lines and break out if winner is found
        for (let i = 0; i < winningLines.length; i++){
            const [a,b,c] = winningLines[i]; // a = 0, b = 1, c = 2 for i = 0
            if(this.validWinner(a,b,c)){
                return this.validWinner(a, b, c);
            }
        }
        return null;
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            markSquare={() => this.markSquare(i)}
            />;
    }

    render() {
        const winner = this.findWinner();
        let status;
        winner ? status = `Winner: ${winner}` : status =  `Next Player: ${this.state.xNext ? 'X' : 'O'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;