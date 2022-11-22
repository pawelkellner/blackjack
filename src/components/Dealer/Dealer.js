import "./Dealer.css"

const Dealer = () =>{
    return(
        <article className="dealer">
                    <div className="dealerName__wrapper">
                        <h1 className="dealerName__h1">Dealer</h1>
                    </div>
                    <div className="dealerStats__wrapper">
                        <div className="cards__wrapper">
                            <p className="cards">Card 1: 1</p>
                            <p className="cards">Card 2: ?</p>
                        </div>
                    </div>
        </article>
    );
}

export default Dealer;