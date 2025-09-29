import "./navigator.css"

interface Props{
    children:  string;
    onDesksClick?: () => void;
}

export const Navbar = ({children, onDesksClick}:Props) =>{
    return (
    <nav className="navigator">
        <h1 className='title'>{children}</h1>
        <div onClick={onDesksClick} className="desks-button">
                desks
        </div>
    </nav>)
}