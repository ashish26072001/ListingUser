import React, {  useState } from 'react'


export default function ({users}) {
    const[query,setQuery]=useState('');
    const [sort,setSort]=useState(false)
    const[sortUser,setShortUser]=useState([])
    const [searchdata,setSearchdata]=useState();
    const [searchHistory,setSearchHistory]=useState(false);
    
    const item=localStorage.getItem('recent')
    
    const handleOnChange=(e)=>{
        if(e.target.value=="name"){
            setSort(true);
            setShortUser(users.sort((a, b) => a.name.localeCompare(b.name)))
            setSearchHistory(false)
            

        }

    }
    const handleOnClick=()=>{
        if(searchdata){
        setQuery(searchdata)}else{setQuery('')}
        window.localStorage.setItem("recent",searchdata);
        setSearchHistory(false)

    }
    const handleSearchOnClick=()=>{
        setSearchHistory(true)

    }
    
    
   
  return ( <><  div className="App">
  <h1>List of User</h1>
  <div className='upperdiv'>
<div >
  <input type="text"
    placeholder='Search...'
    className='search'
    onChange={(e)=>{setSearchdata(e.target.value.toLowerCase())}}
    onClick={handleSearchOnClick}
  />
  {searchHistory&&<div className='searchhistory'>{item}</div>}
  </div>
  <div className='searchbutton'>
    <button onClick={handleOnClick}>search</button>
  </div>
  </div>
  
  
  <br/>
  
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

   