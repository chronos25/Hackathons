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

        this.state = {title:'',
                      description:'',
                      submitted: false
                    };
    }
     getdoc= async ()=>{
        const snapshot = await firebase.firestore().collection('boards').get();
        console.log(snapshot.docs.length);
        // snapshot.then(()=>{
        //     snapshot.docs.map(doc=>console.log(doc.data()));
        // }).catch(err=>{
        //     console.log(err);
        // })
        //return snapshot.docs.map(doc => doc.data());
        snapshot.forEach(document=>{
            console.log(document.data());
        })

    }
    submitHandler=(e)=>{
        e.preventDefault();
        // let data = {
        //     title: this.state.title,
        //     description: this.state.description
        // }
        const { title, description } = this.state;
        //console.log(data);
        this.ref.add({
            title,
            description
          }).then((docRef) => {
            this.setState({
              title: '',
              description: ''
            });
           // this.props.history.push("/")
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

    render(){
        return <Fragment>
        <div className='card'>
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
                <input className ='submitButton'
                    type='submit'
                />
            </form>
            <input onClick={this.getdoc} className ='submitButton'
                    type='submit' name='get'
                />
        </div>
    </Fragment>
    }
}

export default ChallengeCard;