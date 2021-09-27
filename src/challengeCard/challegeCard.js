import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './challengeCard.css';
import firebase from "../service"; 
class ChallengeCard extends React.Component{

   constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.state = {title:'',
                      description:'',
                      tag:'',
                      vote:0,
                      submitted: false
                    }; 
    }
   
    submitHandler=(e)=>{
        e.preventDefault();
        // let data = {
        //     title: this.state.title,
        //     description: this.state.description
        // }
        const { title, description,tag,vote } = this.state;
        //console.log(data);
        this.ref.add({
            title,
            description,
            tag,
            vote
          }).then((docRef) => {
            this.setState({
              title: '',
              description: '',
              tag:'',
              vote:0,
              submitted:true
            }); 
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    }

    onChangeTitle=(event)=>{
        this.setState({
            title: event.target.value
        });
        console.log('1');
    }
    onChangeDescription=(event)=>{
        this.setState({
            description: event.target.value
        });
        console.log('0');
    }
    onChangeTag=(event)=>{
        this.setState({
            tag: event.target.value
        });
    }
    render(){
        let success = this.submitted?<h3>Submitted Successfully !</h3>:<h3> Please give a try.</h3>;
        return <Fragment> 
        <div className='card'>
            {success}
           Create new hackathon !
            <form onSubmit={this.submitHandler}>
                <label className='labels'> Title </label>
                <input type="text" 
                id="title" name="title"
                onChange={this.onChangeTitle}
                />
                 <br />
                <label> Description </label>
                <input type="text" 
                id="description" name="Description"
                onChange={this.onChangeDescription}
                />

                <br />
                <select>
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
    }
}

export default ChallengeCard;