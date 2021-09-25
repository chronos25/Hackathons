import classes from './card.css';

const Card = props =>{
    return (<div className={classes.cards}>
        {props.children}
    </div>
    );
}

export default Card;