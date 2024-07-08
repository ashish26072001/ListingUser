import React, {  useState } from 'react'


export default function ({users}) {
    const[query,setQuery]=useState('');
    const [sort,setSort]=useState(false)
    const[sortUser,setShortUser]=useState([])
    const handleOnChange=(e)=>{
        if(e.target.value=="name"){
            setSort(true);
            setShortUser(users.sort((a, b) => a.name.localeCompare(b.name)))
            

        }

    }
    


   
  return (<>

    <div className="App">
      <h1>List of User</h1>

      <input type="text"
        placeholder='Search...'
        className='search'
        onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}
        
      /><br/>
      
      <select className='select' onChange={handleOnChange} defaultValue="">
        <option value="">All</option>
        <option value="name">Name</option>
      </select>

      

    </div>
    <div className="App">
    <table>
      
      <tr>
      <th>Id</th>
    <th>Name</th>
    <th>username</th>
    <th>Email</th>
    <th>Website</th>
    <th>Phone no</th>
    

  </tr>
        
         {sort? sortUser.filter((user)=>user.name.toLowerCase().includes(query)).map(n => (
            
          <tr key={n.id}>
            <td>{n.id}</td>
            <td>{n.name}</td>
            <td>{n.username}</td>
            <td>{n.email}</td>
            <td>{n.website}</td>
            <td>{n.phone}</td>
          </tr>
          
          
          
        )):users.filter((user)=>user.name.toLowerCase().includes(query)).map(n => (
            
            <tr key={n.id}>
                <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.username}</td>
              <td>{n.email}</td>
              <td>{n.website}</td>
              <td>{n.phone}</td>
            </tr>
            
          ))
          
        
}
      
      
    </table>
  </div>
  </>
);
  
}
