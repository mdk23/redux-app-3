import { createSlice } from '@reduxjs/toolkit'
import {UsersData}  from '../fakeData';


const initialState = {
  users:UsersData
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser:(state,action)=>{
             
      state.users.push(action.payload);  
    },
    deleteUser:(state,{payload})=>{
      console.log(payload); 
      state.users=state.users.filter( (user)=>user.id!==payload);
    },
    updateUser:(state,action)=>{
      console.log(action);
      state.users.map((user)=>{
        if(user.id ===action.payload.id)
        {
            user.name=action.payload.user;
        }
      })

    }
  }
});


export const {addUser,updateUser,deleteUser} = userSlice.actions

export default userSlice.reducer