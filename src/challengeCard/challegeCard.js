import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './challengeCard.css';
import firebase from "../service"; 
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import Header from "../header/header";

function ChallengeCard() {
    const history = useHistory();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [tag,setTag] = useState(''); 
    let createDate = toString(new Date());
    const submitHandler=()=>{ 
        firebase.firestore().collection('challenges').add({
            title,
            description,
            tag,
            vote:0,
            createDate:createDate
          }).then((docRef) => {
                console.log(docRef);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

          history.push("/detail");
    }

   const onChangeTitle=(event)=>{
    setTitle(event.target.value);
        console.log('1');
    }
    const onChangeDescription=(event)=>{
        setDescription(event.target.value);
        console.log('2');
    }
    const onChangeTag=(event)=>{
        setTag(event.target.value);
        console.log('3');
    }
        return (<Fragment> 

<Header />
        <div className='card'>
           Create new hackathon !
            <form onSubmit={submitHandler}>
                <label className='labels'> Title </label>
                <input type="text" 
                id="title" name="title"
                onChange={onChangeTitle}
                />
                 <br />
                <label> Description </label>
                <input type="text" 
                id="description" name="Description"
                onChange={onChangeDescription}
                />

                <br />
                <select onChange={onChangeTag}>
                    <option>Tag</option>
                    <option value="Feature">Feature</option>
                    <option value="Tech">Tech</option>
                </select>
                <br />
                <input className ='submitButton'
                    type='submit'
                />
               
            </form>  
        </div>
    </Fragment>
    )
}

export default ChallengeCard;