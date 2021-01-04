import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

function Hats(){
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={Hats} />
    </div>
  );
}

export default App;
