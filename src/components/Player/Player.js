import "./Player.css"

const Player = ({playerName}) =>{
    return(
        <section className="playerData">
                <section className="player">
                    <div className="playerName__wrapper underline">
                        <h3 className="playerName">{playerName}</h3>
                    </div>
                    <div className="playerIngameMoney__wrapper underline">
                        <i className="fa-solid fa-coins coinStack"></i>
                        <h2 className="playerIngameMoney">€1000</h2>
                    </div>
                    <div className="bank__wrapper">
                        <i className="fa-solid fa-piggy-bank bankMoney"></i>
                        <p className="bank">€100000</p>
                    </div>
                </section>
        </section>
    );
}

export default Player;