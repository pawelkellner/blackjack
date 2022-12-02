import "./GameWindow.css"
import Deck from "../../data/Deck/Deck"
import Dealer from "../Dealer/Dealer"
import Player from "../Player/Player"
import PlayerJoinCard from "../PlayerJoinCard/PlayerJoinCard"
import PlayerCreate from "../PlayerCreate/PlayerCreate"
import PlayerCard from "../PlayerCard/PlayerCard"
import { useEffect, useState } from "react"

const GameWindow = (props) => {
    const [playerCreateWindow, setPlayerCreateWindow] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [playerCreated, setPlayerCreated] = useState(false);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([])
    const [usedCards, setUsedCards] = useState([]);
    const [generatedCard, setGeneratedCard] = useState([]);

    let run = true;

    const startCardGenerator = () => {
        
        while (run){
            if (usedCards.length <= 2) {
                let randomNum = Math.floor(Math.random() * (53 - 1) + 1)
                let chooseCard = Deck.find(card => {
                    return card.number === randomNum;
                })
                if (!usedCards.some((used) => used.number === randomNum)) {
                    let playerGeneratedCard =
                        [
                            {
                                number: chooseCard.number,
                                used: chooseCard.used,
                                value: chooseCard.value,
                                card: chooseCard.card
                            }
                        ];

                    setPlayerCards(playerCards.concat(playerGeneratedCard));
                }
            }else{
                console.log("hier");
                run = false
            }
        }
    }
    
    useEffect(() =>{
        console.log(playerCards)
        setUsedCards(usedCards.concat(playerCards));
        console.log(usedCards)
    }, [playerCards])

    const joinCardButtonClicked = () => {
        setPlayerCreateWindow(!playerCreateWindow)
    }

    const playerCreate = (inputFromPlayerCreate) => {
        setPlayerCreateWindow(!playerCreateWindow);
        setPlayerName(inputFromPlayerCreate);
        setPlayerCreated(true);
    }

    const startGame = () => {
        startCardGenerator();
        setGameStarted(true);
    }

    if (playerCreateWindow){
        return (
            <article className="gameWindow">
                <PlayerCreate
                    playerCreate={playerCreate}
                />
            </article>
        )
    }if (playerCreated) {
        return (
            <article className="gameWindow">
                <Dealer />
                <PlayerCard
                    playerName={playerName}
                    playerCards={playerCards}
                    gameStarted={gameStarted}
                    startGame={startGame}
                />
                <Player
                    playerName={playerName}
                />

            </article>
        )
    }else{
        return (
            <article className="gameWindow">
                <Dealer />
                <PlayerJoinCard
                    joinCardButtonClicked={joinCardButtonClicked}
                />
            </article>
        )
    }
}

export default GameWindow;