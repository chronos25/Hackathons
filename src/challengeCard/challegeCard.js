import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import './challengeCard.css';
import saveMessage from "../service";

class ChallengeCard extends React.Component{

   constructor(props){
        super(props);
        
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {title:'',
                      description:'',
                      submitted: false
                    };
    }

    submitHandler=()=>{
        let data = {
            title: this.state.title,
            description: this.state.description
        }
        console.log('2');

        
        saveMessage(data).then(()=>{
            console.log("Created Successfully !! ");
            this.setState({
                submitted: true
            });
            console.log('3');
        }).catch((e)=>{
            console.log(e);
        })
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
        </div>
    </Fragment>
    }
}

export default ChallengeCard;