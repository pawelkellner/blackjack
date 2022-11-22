import "./PlayerCard.css"

const PlayerCard = ({playerName, playerCards, gameStarted, startGame}) =>{
    let cards;
    let button;
    if(gameStarted === true){
        cards = playerCards.map(card =>{
            return <p key={card.number} className="card1">{card.card}</p>
        })
    }else{
        cards = null
        button = <button onClick={startGame} className="startGame">Start!</button>
    }
    return(
        <article className="playerCard">
                    <div className="playerCardName__wrapper">
                        <h1 className="playerCardName__h1">{playerName}</h1>
                    </div>
                    <div className="playerStats__wrapper">
                        <div className="playerCards__wrapper">
                            {cards}
                        </div>
                        {button}
                    </div>
        </article>
    )
}

export default PlayerCard;