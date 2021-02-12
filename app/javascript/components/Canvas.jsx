import React from 'react';
import Alert from './bootstrap/Alert';
import NavBar from './bootstrap/NavBar';
import Square from './Square';
import SquareContext from './contexts';
import axios from 'axios';

const DefaultCanvasState = {
  players_new: [
                {
                    name: 'Emma',
                    symbol: 'X',
                    avatar: 'https://image.shutterstock.com/image-photo/beautiful-woman-face-closeup-beauty-260nw-1403676473.jpg'
                },
                {name: 'Lisa', symbol: 'O', avatar: 'https://static3.bigstockphoto.com/8/7/2/large1500/278719948.jpg'}],
                  gameOver: false,
                  gamerSquares: [],
                  winnerId: null,
                  nextTurn: 0,
                  lastMove: null,
                  squares: Array(9).fill(null),
                  plays_attributes: [{ player_id: 1 }, {player_id: 2 }
                ]
              };


export default class Canvas extends React.Component {
  constructor(props) {
      super(props);
      console.log(props);
      this.gameId = null;
      this.playHandler = this.playHandler.bind(this);
      this.valid = this.valid.bind(this);
      this.invalid = this.invalid.bind(this);
      this.determineGameOver = this.determineGameOver.bind(this);
      this.createNewGame = this.createNewGame.bind(this);
      this.updateGame = this.updateGame.bind(this);

  }

state = {...DefaultCanvasState, currentUser: DefaultCanvasState.players_new[0]};

componentDidMount(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.state["gameId"] == null) {
    var plays_attributes = [{ player_id: this.props.players[0].id }, {player_id: this.props.players[1].id }]

    console.log("plays_attributes ===============")
    this.setState({plays_attributes: plays_attributes})
    this.createNewGame({plays_attributes: plays_attributes});
  }
}
playHandler(squareId) {
    // validation if its permitted to click on this square
    if (this.invalid(squareId)) return;


    var squares = this.state.squares.slice(); // clones
    squares[squareId] = this.state.players_new[this.state.nextTurn].symbol;
    var nextTurn = this.state.nextTurn == 0 ? 1 : 0;
    var lastMove = squareId;
    var {winnerId, gameOver, gamerSquares}  = this.determineGameOver(squares);
    this.setState({squares, nextTurn, lastMove, gamerSquares, gameOver, winnerId})

}

componentDidUpdate(prevProps, prevState) {
 this.updateGame(this.state);
}

determineGameOver = (squares) => {
    var that = this;
    var gameOver = false;
    var winnerId = null;
    var gamerSquares = [];
    var pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    pattern.forEach((arr) => {
        if (squares[arr[0]] == squares[arr[1]] && squares[arr[1]] == squares[arr[2]] && squares[arr[2]] != null) {
            gameOver = true;
            gamerSquares = arr;
            winnerId = that.state.players_new[that.state.nextTurn].id;
        }
    });

    // Game ends, all squares are filled but game is not over yet
    //  Mark the game-over and declare no body won
    if(!gameOver && squares.indexOf(null) == -1){
        gameOver = true;
        winnerId = null;
    }

    return {winnerId, gameOver, gamerSquares};
};

valid = (squareId) => {
    if (!this.state.gameOver && this.state.squares[squareId] == null)
        return true;
    return false
};

invalid = (squareId) => {
    return !this.valid(squareId);
};

renderHeader = () => {
    if (this.state.gameOver && this.state.winnerId != null) {
        return (
            <h6>
                <span className="font-weight-bold">!! {this.state.players_new.filter(item => { return item.id === this.state.winnerId})[0].name}</span>

                &nbsp; wins the game !!
            </h6>
        )
    } else if (!this.state.winnerId && this.state.gameOver)
    {
        return (
            <h6>
                Game Over, but no body wins.
            </h6>
        )
    } else
    {
        return (
            <h6>
                <span className="font-weight-bold">{this.state.players_new[this.state.nextTurn].name}</span>
                &nbsp;has next turn to play!
            </h6>
        )
    }
};

startOver = ()=>{
    this.setState(DefaultCanvasState);
    this.createNewGame(DefaultCanvasState);
};


createNewGame = (data) =>{
  var gameId = null;
  axios({
        method: 'post',
        url: "/api/v1/games",
        data: data
      }).then(function (response) {
        console.log(response);
        gameId = response["data"]["gameId"];
        var players = response["data"]["players"];
        players[0]["symbol"] = 'X';
        players[1]["symbol"] = 'O';

        this.setState({ gameId: gameId, players_new: players});
        console.log(this.state)
      }.bind(this));
  }

  updateGame = (data) =>{
    var gameId = null;
    if(this.state["gameId"]==null){
      return  false;
    }
    axios({
        method: 'patch',
        url: "/api/v1/games/"+ this.state["gameId"],
        data: data
    }) .then(function (response) {
      
    }.bind(this));
  }

  render = () => (
    <React.Fragment>
        <Alert/>
        <div className="py-5 text-center">
            {this.renderHeader()}

            <div className="mt-4 row">
                <div className="col-sm-4">
                    <h2 className="badge badge-primary p-4 border rounded-circle">{this.state.players_new[0].symbol}</h2>
                    <h2>Player1</h2>
                    <h3>{this.state.players_new[0].name}</h3>
                    {this.drawTurnPen(0)}
                </div>

                <div className="col-sm-4">
                    <div className="canvas d-flex flex-wrap mx-auto">
                        <SquareContext.Provider value={{state: this.state, handler: this.playHandler}}>
                            {this.genSquares()}
                        </SquareContext.Provider>
                        {this.drawPlayAgain()}
                    </div>
                </div>

                <div className="col-sm-4">
                    <h2 className="badge badge-primary p-4 border rounded-circle">{this.state.players_new[1].symbol}</h2>
                    <h2>Player2</h2>
                    <h3>{this.state.players_new[1].name}</h3>
                    {this.drawTurnPen(1)}
                </div>
            </div>
        </div>
    </React.Fragment>
  );


  drawTurnPen = (playerIndex = 0) => {
    if (this.state.nextTurn == playerIndex) {
        return (
            <i className="fas fa-pen-fancy fa-5x  text-success border rounded-circle"></i>
        )
    }
  };

  genSquares = () => (
      this.state.squares.map((_data, index) => (
          <Square index={index} key={index}/>

      ))

  );

  drawPlayAgain = () => {

      if (this.state.gameOver) {
          return (
              <button onClick={this.startOver} className="btn btn-primary mx-auto mt-4">
                  <i className="fas fa-redo"></i>
                  &nbsp;Play Again
              </button>)
      }
  };

}