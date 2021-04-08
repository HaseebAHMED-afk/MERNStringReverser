import { Typography } from '@material-ui/core';
import moment from 'moment';
import { useState , useEffect } from 'react';
import './App.css';
import StringCard from './Components/StringCard';
import axios from 'axios'

function App() {

  let [string , setString] = useState('');
  let [data , setData] = useState(null)

  

  useEffect(()=>{

    const fetchData = async () =>{
      let {data} = await axios.get('http://localhost:5000/')
      setData(data)
    }

    fetchData();
  }, [])

  console.log(data);

  const handleSubmit = async () =>{
    let inputObj = {
      input: string,
      output: string.split('').reverse().join(''),
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }

    await axios.post('http://localhost:5000/', inputObj).then((response) => console.log(response)).catch((err)=> console.log(err))

    await setString('')

    window.location.reload();

  }

  return (
    <div className="App">
     <Typography variant='h3' style={{color:'white'}}  >MERN String reverser</Typography>
     <Typography variant='body1' style={{color:'white'}} >By <a href='https://www.github.com/HaseebAHMED-afk' > HaseebAHMED-afk</a></Typography>
     <div className='input-section' >
       <label>Enter something: <input className='string-input' type='text' onChange={(e) => setString(e.target.value)} ></input></label>
       <button className='submit-btn' onClick={handleSubmit} >Submit</button>
     </div>
     {
       data && data.map((string,i) => (
        <StringCard key={i} input={string.input} output={string.output} time = {string.time} />
       ))
     }
     
    </div>
  );
}

export default App;
