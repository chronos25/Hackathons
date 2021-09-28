import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import '../login/LoginCard.css';


function Login(){
    let history = useHistory();
    const [empId,setEmpId]=useState('');

    const submitHandler=()=>{
        console.log(empId);
        history.push("/detail");
    }

    const changeHandler=(event)=>{
       setEmpId( event.target.value);
    }

        return (<Fragment>
         <header className="header">
            Hackathon Internals
        </header>
        <div className='card'>
            Welcome ! Create hacks 
            <form onSubmit={submitHandler}>
                <label> Employee Id </label>
                <input type="text" 
                id="empId" name="empId"
                onChange={changeHandler} />
                <button className='submitButton'>
                    Login
                </button>
            </form>
        </div>
    </Fragment>
        )
}

export default Login;