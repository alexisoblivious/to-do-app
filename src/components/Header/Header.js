import './Header.scss';
import { FaTasks } from 'react-icons/fa';
import MainMenu from '../MainMenu';

function Header() {
    return (
        <>
            <header className='main'>
                <div className="title"><FaTasks />ToDo App</div>
                <div className="author">by Alexis Piercey</div>
                
            </header>
            <MainMenu />
        </>
    );
}

export default Header;