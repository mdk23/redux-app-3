import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './reducers/user';
import { useState } from 'react';



function App() {
  const {users}=useSelector(store=>store.user);
  const dispatch=useDispatch();
  

  const [name,setName]=useState('');
  const [username,setUserName]=useState('');
  const [newUsername,setNewUserName]=useState('');
   
 
  return (
    <div className="App">
      
      <div className='addUser'>
          <input type='text' placeholder='Name...' onChange={(event)=>setName(event.target.value)}/>
          <input type='text' placeholder='Username...' onChange={(event)=>setUserName(event.target.value)}/>
          <button onClick={()=>{ dispatch(addUser({id:users[users.length-1].id+1,name: name, username:username}))}}>Add User</button>
      </div>

      <div className='displayUsers'>
        {
          users.map((user)=>{
            return (
              <div key={user.id}>
                  <h1>{user.name} : {user.username} </h1>
                  <input type='text' placeholder='New User Name' onChange={(event)=>setNewUserName(event.target.value)}/>
                  <button onClick={()=>dispatch(updateUser({id:user.id,user:newUsername}))}>Update User</button>
                  <button onClick={()=>dispatch(deleteUser(user.id))}>Delete User</button>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
