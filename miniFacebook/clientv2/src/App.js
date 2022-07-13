import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
