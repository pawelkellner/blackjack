import "./PlayerCreate.css"

const PlayerCreate = ({inputValueRecieved}) =>{
    const playerCreateButtonClicked = () =>{
        inputValueRecieved();
    }

    return(
        <article className="playerCreate__article">
            <div className="playerCreate__inputWrapper">
                <label className="playerCreate__input playerCreate__label" htmlFor="name">Naam:</label>
                <input className="playerCreate__input playerCreate_input" type="text" value="" placeholder="Naam" name="name"/>
            </div>
            <div className="playerCreate__buttonWrapper">
                <button onClick={playerCreateButtonClicked} className="playerCreate__button">Spelen!</button>
            </div>
        </article>
    )
}

export default PlayerCreate;