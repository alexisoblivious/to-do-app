import './styles.scss';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
       <>
            <nav className="mainMenu">
                <Link to="/">Home</Link>
                <Link to="/add">Add</Link>
                <Link to="/help">Help</Link>
            </nav>
            
            
        </>   
       
    );
}