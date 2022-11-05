import React from "react"
import "./GameWindow.css"
import Player from "../Player/Player"
import PlayerJoinCard from "../PlayerJoinCard/PlayerJoinCard"
import Dealer from "../Dealer/Dealer"
import PlayerCreate from "../PlayerCreate/PlayerCreate"

class GameWindow extends React.Component{
    constructor(props){
        super(props)
        this.state = ({playerCreateWindow: ""})
    }

    componentDidMount(){
        this.setState({playerCreateWindow: false})
    }

    joinCardButtonClicked = () =>{
        this.setState({playerCreateWindow: true})
    }

    render(){
        if(this.state.playerCreateWindow === true){
            return(
                <article className="gameWindow">
                    <PlayerCreate />
                </article>
            )
        }
        return(
            <article className="gameWindow">
                <Dealer />
                <PlayerJoinCard 
                joinCardButtonClicked={this.joinCardButtonClicked}
                />
                <Player 
                playerName={this.playerName}
                />
            </article>
        )
    }
}

export default GameWindow;