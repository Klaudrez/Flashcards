import "./deck.css"
import { useNavigate } from "react-router-dom"

interface Props{
    children : string,
    cardsCuantity : number,
    nativeLenguage : string,
    learningLenguage : string,
    deckID : number,
}
export const Deck = ({children, cardsCuantity, nativeLenguage, learningLenguage, deckID}: Props) =>{

    const navigate = useNavigate();
          
          const handleClick = () => {
              navigate(`/${deckID}`);
          }

    return (
        <div className="deck" onClick={handleClick}>
            <p className="title-deck">
                {children}
            </p>
            <p className="cuantity-deck">{cardsCuantity}</p>
             <div className="lenguage-container">
                <p className="lenguage">{nativeLenguage}</p>
                <p className="lenguage">{learningLenguage}</p>
            </div>
        </div>
    )
}