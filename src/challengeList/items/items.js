import { Fragment } from 'react';
import classes from './items.css';

const Items = props =>{
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
        </div>

    </li>
}

export default Items;