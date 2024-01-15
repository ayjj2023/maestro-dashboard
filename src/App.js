import './App.css';

import Notice from './components/Notice';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <Notice message = "hello this is a placeholder message"/>
      <Schedule />
    </div>
  );
}

export default App;
