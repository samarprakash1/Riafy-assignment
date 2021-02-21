import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Header';
import Pageone from './Pageone';
import Videoplayer from './Videoplayer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path="/" component={Pageone}></Route>
    <Route path="/videoplayer" component={Videoplayer}></Route>
    <Videoplayer /> 
    </Switch>
    </div>
  );
}

export default App;
