import "./desk.css"

interface Props{
    children : string,
    cardsCuantity : number,
    nativeLenguage : string,
    learningLenguage : string,
    redirectMethod? : () => void
}
export const Desk = ({children, cardsCuantity, nativeLenguage, learningLenguage, redirectMethod}: Props) =>{
    return (
        <div className="desk" onClick={redirectMethod}>
            <p className="title-desk">
                {children}
            </p>
            <p className="cuantity-desk">{cardsCuantity}</p>
             <div className="lenguage-container">
                <p className="lenguage">{nativeLenguage}</p>
                <p className="lenguage">{learningLenguage}</p>
            </div>
        </div>
    )
}