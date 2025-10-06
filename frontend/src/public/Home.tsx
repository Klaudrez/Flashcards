import { Navbar } from "../components/navigator/navigator"
import { Deck } from "../components/deck/deck"
import { useNavigate } from "react-router-dom"
import type { DeckBase } from "../assets/Models/BDDFake"
import { useFetch } from "../hooks/useFetch"
import { adaptBackendDeckArray, type BackendDeck } from "../services/decksAdapters"


const url = "http://localhost:8000/decks"

export const Home = () => {

  const {data, error, loading} = useFetch<BackendDeck[]>(url)
  
  if(loading){
    return (
      <div>Loading....</div>
    )
  }
  if(error){
    return (<div>An error has occured: {error.message}</div>)
  }

  const decks = data ? adaptBackendDeckArray(data as BackendDeck[]): [];
  return(
    <div className='decks-container'>

      {(decks).map(deck => (
        <Deck
          key={deck.deckID}
          deckID={deck.deckID}
          cardsQuantity={deck.cardsQuantity}
          nativeLanguage={deck.nativeLanguage}
          learningLanguage={deck.learningLanguage}
        >
          {deck.title}
        </Deck>
      ))}
    </div>
  )
}