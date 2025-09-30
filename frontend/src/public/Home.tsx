import { Navbar } from "../components/navigator/navigator"
import { Deck } from "../components/deck/deck"
import { useNavigate } from "react-router-dom"



export const Home = () => {

  return(
    <div className='decks-container'>
      <Navbar>Flashcards App</Navbar>
      <Deck
        cardsCuantity={40}
        nativeLenguage='English'
        learningLenguage='Russian'
        deckID={1}>
        Frases cotidianas
      </Deck>
      <Deck
        cardsCuantity={30}
        nativeLenguage='English'
        learningLenguage='Russian'
        deckID={2}>
        Game: The Forest
      </Deck>
      <Deck
        cardsCuantity={30}
        nativeLenguage='English'
        learningLenguage='Russian'
        deckID={3}>
        Places
      </Deck>
      <Deck
        cardsCuantity={30}
        nativeLenguage='English'
        learningLenguage='German'
        deckID={4}>
        Frases cotidianas
      </Deck>
    </div>
  )
}