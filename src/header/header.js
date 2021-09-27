
import { NavLink } from 'react-router-dom';

import classes from './header.module.css';
function header(){
    return <header className={classes.header}>
        <nav>
            <ul>
                <li><NavLink activeClassName="active" to='/create'> Create</NavLink> </li>
                <li> <NavLink activeClassName="active" to='/detail'> Hacks </NavLink> </li>
            </ul>
        </nav>
    </header>
}

export default header;