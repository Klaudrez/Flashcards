import { Card } from "../components/card/card"


export const Practice = () => {
    return(
        <>
            <h2> Esta es la vista para practicar.</h2>
            <Card 
            phrase = "This is a phrase in English" 
            answer = "Это фраза на русском языке" />
        </>
    )
}