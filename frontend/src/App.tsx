import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navigator/navigator'
import { Desk } from './components/desk/desk'
function App() {

  

  return (
    <div className='decks-container'>
      <Navbar>Flashcards App</Navbar>
      <Desk
        cardsCuantity={40}
        nativeLenguage='English'
        learningLenguage='Russian'>
          Frases cotidianas
      </Desk>
      <Desk
      cardsCuantity={30}
      nativeLenguage='English'
      learningLenguage='Russian'>
        Game: The Forest
      </Desk>
      <Desk
      cardsCuantity={30}
      nativeLenguage='English'
      learningLenguage='Russian'>
        Places
      </Desk>
      <Desk
      cardsCuantity={30}
      nativeLenguage='English'
      learningLenguage='German'>
        Frases cotidianas
      </Desk>
    </div>
  )
}

export default App
