import { useEffect, useState } from "react/cjs/react.development";
import firebase from "../service";
import { Fragment } from "react";
import "./challengeList.css";

import Header from "../header/header";

function ChallengeList(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        const snapshot = await firebase.firestore().collection('challenges').get();
        let arr=[]
        snapshot.forEach(doc=>{
            arr.push(doc.data());
        })
        setData(arr);
    }
    fetchData();
    },[])
    //console.log('result ',data);
    useEffect(() => {
        console.log(data);
       }, [data]);
       
    return(
        <Fragment>
            <Header/>
            <div className="cardList">
                <table id='list'>
                <thead>

                    <tr>
                        <td><h3>Title</h3>  </td>
                        <td><h3>Description</h3></td>
                        <td><h3>Tag        </h3></td> 
                        <td><h3>Vote       </h3></td>
                    </tr>
                    </thead>
                {
                    data?.map((items)=>(
                        <tbody>
                        <tr>
                            <td>{items.title}</td>
                            <td><h4>{items.description}</h4></td>
                            <td>{items.tag}</td>
                            <td>{items.vote}</td> 
                        </tr>
                        </tbody>
                    ))
                }
                </table> 
        </div>
        </Fragment>
    )
}

export default ChallengeList;




