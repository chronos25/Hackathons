import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import '../login/LoginCard.css';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {empId:''};
    }

    submitHandler=(event)=>{
        event.preventDefault();
        console.log('EmpId '+this.state.empId);
    }

    changeHandler=(event)=>{
        this.setState({empId: event.target.value});
    }

    render(){
        return <Fragment>
        <div className='card'>
            Welcome ! Create hacks 
            <form onSubmit={this.submitHandler}>
                <label> Employee Id </label>
                <input type="text" 
                id="empId" name="empId"
                onChange={this.changeHandler} />
                <input className = 'submitButton'
                    type='submit'
                />
            </form>
        </div>
    </Fragment>
    }
}

export default Login;