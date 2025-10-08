import "./navigator.css"
import { useNavigate, useLocation } from "react-router-dom";

interface Props{
    children:  string;
}



export const Navbar = ({children}:Props) =>{
    const navigate = useNavigate();
    const location = useLocation();

    const handleDecksClick = () => {
    if (location.pathname !== "/") {
        navigate("/");
}
};
    return (
    <nav className="navigator">
        <h1 className='title' onClick={handleDecksClick}>{children}</h1>
        <div onClick={handleDecksClick} className="decks-button">
                decks
        </div>
    </nav>)
}