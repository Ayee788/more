import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

// components MUST be Pascal Case<----pay attention to the capitalization

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    
    </div>
  )
}



export default App;
