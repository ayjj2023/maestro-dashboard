import './App.css';

import Notice from './components/Notice';
import Schedule from './components/Schedule';
import Targets from './components/Targets';
import Clock from './components/Clock';

function App() {

  return (
    <div className="App">
      <Notice message = "hello this is a placeholder message"/>
      <Schedule />
      <Clock />
    </div>
  );
}

export default App;
