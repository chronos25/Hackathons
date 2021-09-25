import './App.css';
//import LoginCard from './login/LoginCard';
import ChallengeCard from './challengeCard/challegeCard';
//import ChallengeList from './challengeList/challengeList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
            Hackathon Internals
      </header>
      <main>
          <ChallengeCard />
      </main>
    </div>
  );
}

export default App;
