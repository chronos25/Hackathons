import classes from './challengeList.css';
import Card from '../UI/card';
import Items from './items/items';
import { Fragment } from 'react';

const dummyd=[
    {
        id:'c1',
        title:'1',
        description:'Ram is great'
    },
    {
        id:'c2',
        title:'2',
        description:'Tamwe mata chapitta Tamwe'
    },
    {
        id:'c3',
        title:'3',
        description:'Modi is creating ambiguity between you and me.'
    }
];

const challengeList = ()=>{
    const cLists = dummyd.map((doc)=>
        <Items key={doc.id} name={doc.title} description={doc.description}/>
    );

    return (
    <Fragment>
    <div className={classes.gcontainer}>
        <div className={classes.gitem}>Challenges</div>
        <div className={classes.gitem}>Votes Count</div>
        <div className={classes.gitem}>Tags</div> 
    </div> 
        <section className={classes.meals}>
            <Card>
                <ul>{cLists}</ul>
            </Card>
        </section>
        </Fragment>
    );
};

export default challengeList;