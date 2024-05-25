import { Link } from "react-router-dom"
import './styles.scss';

export default function NestedNav({ links }) {
    return (
        <div className='nestedNav'>
            <nav className='helpPages'>
               <Link to="/help">Introduction</Link>
               <Link to="/help/add">Adding Tasks</Link>
               <Link to="/help/remove">Removing Tasks</Link>
               <Link to="/help/status">Changing Status</Link>
            </nav>
        </div>
      );
    }