import React, { useEffect, useState } from "react";
import GameOver from "./componentes/GameOver";
import GameBoard from "./componentes/GameBoard";
import game from "./game/game";

export default function MemoryGame() {

    const[gameOver, setGameOver] = useState(false);

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        setCards(game.createCardsFromTechs())
    },[])

    function restart(){

        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)

    }
    function handleFlip(card){
        game.flipCard(card.id, ()=>{
            //gameOverCallback
            setGameOver(true)

        },()=>{
             //noMatchCallback
             setCards([...game.cards])
        })
        setCards([...game.cards])
    }

    return(
        <div>
            <GameBoard  handleFlip={handleFlip} card={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
    )
    
}