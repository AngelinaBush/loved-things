import './App.css';
import Foods from './Foods';
import Places from './Places';
import Skill from './Skill';

function App() {

  return (
    <div className='app-container'>  
      <div>
          <h1>I'D LIKE..</h1>
      </div>
      <div className='component-container'>
          <Places/>
          <Skill/>
          <Foods/>
      </div>
    </div>
  );
}

export default App;
