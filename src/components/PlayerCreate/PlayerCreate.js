import React from "react"
import "./PlayerCreate.css"

class PlayerCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = ({input: ""})
    }
    
    inputPlayerName = (event) =>{
        this.setState({input: event.target.value})
    }

    playerCreateButtonClicked = () =>{
        if(this.state.input === ""){
            window.alert("Voer een naam in!")
        }else{
           this.props.playerCreate(this.state.input)
        }
    }

    render(){
        return(
            <article className="playerCreate__article">
                <div className="playerCreate__inputWrapper">
                    <label className="playerCreate__input playerCreate__label" htmlFor="name">Naam:</label>
                    <input onChange={this.inputPlayerName} className="playerCreate__input playerCreate_input" type="text" placeholder="Naam" name="name"/>
                </div>
                <div className="playerCreate__buttonWrapper">
                    <button onClick={this.playerCreateButtonClicked} className="playerCreate__button">Spelen!</button>
                </div>
            </article>
        )
    }
}

export default PlayerCreate;