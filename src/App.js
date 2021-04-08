import { Typography } from '@material-ui/core';
import './App.css';
import StringCard from './Components/StringCard';

function App() {
  return (
    <div className="App">
     <Typography variant='h3' style={{color:'white'}}  >MERN String reverser</Typography>
     <Typography variant='body1' style={{color:'white'}} >By <a href='https://www.github.com/HaseebAHMED-afk' > HaseebAHMED-afk</a></Typography>
     <div className='input-section' >
       <label>Enter something: <input className='string-input' type='text' ></input></label>
       <button className='submit-btn' >Submit</button>
     </div>
     <StringCard />
    </div>
  );
}

export default App;
