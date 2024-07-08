
import './App.css'
import HomePage from './components/HomePage'

import React, { useEffect, useState } from 'react'

function App() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
      const fetchdata = async () => {
          try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data)
          } catch (error) {
            console.log(error);
          }
        };
        fetchdata()
  }

,[])
  return <div className='maindiv'>
    
    <HomePage users={users}></HomePage>

  </div>
  
  
  
  
   
}

export default App
