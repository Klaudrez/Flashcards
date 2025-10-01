import "./card.css"
import { useState } from 'react'

interface Props{
    phrase : string,
    answer : string
}

interface HideAnswerProps {
    text: string;
    isVisible: boolean; 
}

const HideAnswer = ({ text, isVisible }: HideAnswerProps) => {
    if (!isVisible) {
        return <p className="answer">---</p>
    }
    
    return (
        <p className="answer">{text}</p>
    );
}
export const Card = ({phrase, answer} : Props) =>{

    const [answerState,setAnswerState] = useState(false)
    
    const toggleAnswer = () => {
        setAnswerState(!answerState); 
    };

    return (
        <div className="card-container">
            <p className="phrase">{phrase}</p>

            <HideAnswer 
                text={answer}
                isVisible={answerState}
            />


            <button onClick={toggleAnswer}>
                {answerState ? 'Hide answer' : 'Show answer'}
            </button>
        </div>
    );
}