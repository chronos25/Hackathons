import './App.css';
import ChallengeCard from './challengeCard/challegeCard';
import ChallengeList from './challengeList/challengeList';
import { Route } from "react-router-dom";

import Header from "./header/header";
import LoginCard from './login/LoginCard';
function App() {
  return ( 
           <div className="App">
             <Header />
           <main> 
                  <Route  path='/login'>
                   <LoginCard/>
                   </Route>
                 <Route  path='/create'>
                   <ChallengeCard/>
                   </Route>
                 <Route  path='/detail'>
                   <ChallengeList/>
                   </Route>
           </main>
         </div>  
  );
}

export default App;
