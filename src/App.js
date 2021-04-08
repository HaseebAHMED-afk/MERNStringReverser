import { Typography } from '@material-ui/core';
import moment from 'moment';
import { useState } from 'react';
import './App.css';
import StringCard from './Components/StringCard';

function App() {

  let [string , setString] = useState('');

  const handleSubmit = () =>{
    let inputObj = {
      input: string,
      output: string.split('').reverse().join(''),
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }

    setString('')

  }

  return (
    <div className="App">
     <Typography variant='h3' style={{color:'white'}}  >MERN String reverser</Typography>
     <Typography variant='body1' style={{color:'white'}} >By <a href='https://www.github.com/HaseebAHMED-afk' > HaseebAHMED-afk</a></Typography>
     <div className='input-section' >
       <label>Enter something: <input className='string-input' type='text' onChange={(e) => setString(e.target.value)} ></input></label>
       <button className='submit-btn' onClick={handleSubmit} >Submit</button>
     </div>
     <StringCard />
    </div>
  );
}

export default App;
