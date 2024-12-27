
import { useEffect, useState } from 'react'
import './Users.css'
import User from './User'
export default function Users(){
    
     const [users , setUsers] = useState([])   // kono data nah thakle eamty arry thakbe 
     
     useEffect( () =>{
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => setUsers(data))

     },[])
   
    return(
        <div className='users'>
            <h2> Users number : {users.length}</h2>

            {
                users.map( user => <User user ={user}> </User> )
            }
        </div>
    )
}