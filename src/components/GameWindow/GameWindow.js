import React from "react"
import "./GameWindow.css"
import Deck from "../../data/Deck/Deck"
import Dealer from "../Dealer/Dealer"
import Player from "../Player/Player"
import PlayerJoinCard from "../PlayerJoinCard/PlayerJoinCard"
import PlayerCreate from "../PlayerCreate/PlayerCreate"
import PlayerCard from "../PlayerCard/PlayerCard"

class GameWindow extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            playerCreateWindow: false,
            playerName: "",
            gameStarted: false,
            playerCreated: false,
            playerCards: [],
            dealerCards: [],
            usedCards: [],
            generatedCard: []
        })
    }

    startCardGenerator = () =>{
        while (true){
            if(this.state.usedCards.length < 2){
                let randomNum = Math.floor(Math.random() * (53 - 1) + 1)
                let chooseCard = Deck.find(card => {
                    return card.number === randomNum;
                })
                if(!this.state.usedCards.some((used) => used.number === randomNum)){
                    let playerGeneratedCard = 
                        [
                            {
                                number: chooseCard.number,
                                used: chooseCard.used,
                                value: chooseCard.value,
                                card: chooseCard.card
                            }
                        ];
                    
                    this.setState((state) => {
                        return {playerCards: state.playerCards.concat(playerGeneratedCard),
                                usedCards: state.usedCards.concat(playerGeneratedCard)}
                        }, () => {console.log(this.state.usedCards.length)})
                }         
            }else{
                break;
            }
        }
    }

    randomCardGenerator = () =>{
        
    }

    joinCardButtonClicked = () =>{
        this.setState({playerCreateWindow: !this.state.playerCreateWindow})
    }

    playerCreate = (inputFromPlayerCreate) =>{
        this.setState({
            playerCreateWindow: !this.state.playerCreateWindow,
            playerName: inputFromPlayerCreate,
            playerCreated: true
        })
        
    }

    startGame = () =>{
            this.startCardGenerator();
            this.setState({gameStarted: true})
    }

    render(){
        if(this.state.playerCreateWindow === true){
            return(
                <article className="gameWindow">
                    <PlayerCreate 
                    playerCreate={this.playerCreate}
                    />
                </article>
            )
        }
        if(this.state.playerCreated === true){
            return(
                <article className="gameWindow">
                    <Dealer />
                    <PlayerCard
                    playerName={this.state.playerName}
                    playerCards={this.state.playerCards}
                    gameStarted={this.state.gameStarted}
                    startGame={this.startGame}
                    />
                    <Player 
                    playerName={this.state.playerName}
                    />

                </article>
            )
        }
        return(
            <article className="gameWindow">
                <Dealer />
                <PlayerJoinCard 
                joinCardButtonClicked={this.joinCardButtonClicked}
                />
            </article>
        )
    }
}

export default GameWindow;