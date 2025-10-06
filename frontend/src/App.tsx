//import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navigator/navigator'
//import { Deck } from './components/deck/deck'
import { AppRouter } from './AppRouter'



function App() {

  return (<>
     <Navbar>Flashcards App</Navbar>
    <AppRouter>
    </AppRouter>
  </>
  )
}

export default App
