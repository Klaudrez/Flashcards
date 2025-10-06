import "./deck.css"
import { useNavigate } from "react-router-dom"

interface Props{
    children : string,
    cardsQuantity: number,
    nativeLanguage: "English" | "Russian" | "Spanish" | "German",
    learningLanguage: "English" | "Russian" | "Spanish" | "German"
    deckID : number,
}
export const Deck = ({children, cardsQuantity, nativeLanguage, learningLanguage, deckID}: Props) =>{

    const navigate = useNavigate();
          
          const handleClick = () => {
              navigate(`/${deckID}`);
          }

    return (
        <div className="deck" onClick={handleClick}>
            <p className="title-deck">
                {children}
            </p>
            <p className="cuantity-deck">{cardsQuantity}</p>
             <div className="lenguage-container">
                <p className="lenguage">{nativeLanguage}</p>
                <p className="lenguage">{learningLanguage}</p>
            </div>
        </div>
    )
}