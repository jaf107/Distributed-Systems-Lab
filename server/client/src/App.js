import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';
import { loadUser } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(loadUser());
  })
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
