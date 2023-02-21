import logo from './logo.svg';
import './App.css';
import Counter

from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* imported one istance of Counter component */}
      <Counter />
    </div>
  );
}

export default App;
