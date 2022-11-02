import React from "react";
import './pokecard.css'


function Pokecard(props) {
    return (
        <div className="pokecard">
            <h1>{props.name}</h1>
            <img src={props.picture} alt=""></img>
            <p>Type :{props.type}</p>
            <p>EXP :{props.exp}</p>

        </div>
    )
}

export default Pokecard