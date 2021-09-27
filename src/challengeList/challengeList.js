 
import { useEffect, useState } from "react/cjs/react.development";

import firebase from "../service";

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
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Vote</td>
                <td>Tag</td>
            </tr>
        {
            data.length > 0 && data.map((items)=>{
                <tr>
                    <td>{items.title}</td>
                    <td>{items.description}</td>
                    <td>{items.tag}</td>
                    <td>{items.vote}</td>
                </tr>
            })
        }
        </table>
    )
}

export default ChallengeList;








// class ChallengeList extends react.Component{
//     constructor(props){ 
//         super(props);
//         this.isempty = false;
//         this.arr=[];
//     }
//     getdoc= async ()=>{
//         const snapshot = await firebase.firestore().collection('challenges').get();
//         console.log(snapshot.docs.length);
//         snapshot.forEach(document=>{
//             //console.log(document.data());
//             this.arr.push(document.data());

//         })
//         for(let i=0;i<this.arr.length;i++){
//             console.log(this.arr[i]);
//         }
//         // if(arr.length){
//         //     this.isempty = true;
//         // }
//         return this.arr;
//     }

//     render(){
//         const list = this.arr.map(c=>(<h2>{c.title} {c.description} {c.vote} {c.tag}</h2>))
//         // let ui = this.isempty ? <span>No data </span> :
//         //     {list}
//         // ;
//         return(

//             <div>
//                 <input onClick={this.getdoc} className ='submitButton'
//                     type='submit' name='get'
//                 />

//                  <div>
//                     {list}
//                 </div>
//             </div>
//         )
//     }
// }

// export default ChallengeList;