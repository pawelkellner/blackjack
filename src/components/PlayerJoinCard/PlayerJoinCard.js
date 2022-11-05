import "./PlayerJoinCard.css"

const PlayerJoinCard = ({joinCardButtonClicked}) =>{
    return(
        <article className="playerJoinCard">
                <button onClick={joinCardButtonClicked} className="playerJoinCard__button">+</button>
                <p>Klik om te spelen!</p>
        </article>
    );
}

export default PlayerJoinCard;