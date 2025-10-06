import "./navigator.css"

interface Props{
    children:  string;
    onDecksClick?: () => void;
}

export const Navbar = ({children, onDecksClick}:Props) =>{
    return (
    <nav className="navigator">
        <h1 className='title'>{children}</h1>
        <div onClick={onDecksClick} className="decks-button">
                desks
        </div>
    </nav>)
}