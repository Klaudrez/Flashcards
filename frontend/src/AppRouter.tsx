//import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./public/Home"
import { Practice } from "./public/Practice";
import { Navbar } from "./components/navigator/navigator";


/* interface Props{
    children: ReactNode
} */



export const AppRouter = () =>{                         /* ({children}:Props) =>{ */
    return(
        <BrowserRouter>
            <Navbar>Flashcards App</Navbar>
            <Routes>
                <Route path="/" element={<Home/ >}/>
                <Route path="/:deckID" element={<Practice />}/>
            </Routes>
        </ BrowserRouter>
    )
}