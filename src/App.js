import './App.css';
import React, { useEffect } from 'react'  
import ChallengeCard from './challengeCard/challegeCard';
import ChallengeList from './challengeList/challengeList';
import { Route,Switch,Redirect } from "react-router-dom";
 
import LoginCard from './login/LoginCard';
function App() {
  useEffect(() => {
    document.title = "Hackathon Application"
  }, [])
  return ( 
           <div className="App">
             
           <main> 
             <Switch>
                  <Route path="/" exact>
                    <Redirect to='/login' />
                    </Route>
                  <Route  path='/login'>
                   <LoginCard/>
                   </Route> 
                 <Route  path='/create'>
                   <ChallengeCard/>
                   </Route>
                 <Route  path='/detail'>
                   <ChallengeList/>
                   </Route>
                  </Switch>
           </main>
         </div>  
  );
}

export default App;
