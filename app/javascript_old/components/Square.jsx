import React from 'react';
import SquareContext from './contexts'

// <!-- Since Squares are gonna have synamic value and events and gonna repeat -->
// <!-- We are going to create a separate component -->

export default class Square extends React.Component {
    static contextType = SquareContext;

    markActive = () => {
        if (this.props.index == this.context.state.lastMove) {
            return true;
        }else if(this.context.state.gamerSquares.indexOf(this.props.index) > -1){
            return true;
        }
        return false;
    };

    render = () => (
        <div className={`square ${this.markActive() ? 'last-move' : ''}`}
             onClick={() => {
                 this.context.handler(this.props.index)
             }}>
            {this.context.state.squares[this.props.index]}
        </div>
    )
}
