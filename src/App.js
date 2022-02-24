import React from "react";
import { useEffect, useState } from 'react';
import "./style.css";
import { db } from './firebase-config';
import {collection, getDocs, addDoc} from 'firebase/firestore'
export default function App() {
  const [newName,setNewName]=useState('');
  const [newAge,setNewAge]=useState(0);
  const [user,setUser]=useState([]);
  const userCollectionRef=collection(db,"users");
  


  useEffect(()=>{
    const getUsers= async ()=>{
      const data=await getDocs(userCollectionRef);
      setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      // console.log(data);
    }
    getUsers()
  },[]);
  useEffect(()=>{

  },[newName])
  console.log(user);
  console.log(newName);
  const Click=async ()=> {
    await addDoc(userCollectionRef,{name:newName,age:newAge})
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <label >Name</label>
        <input onChange={(e)=>{setNewName(e.target.value)}}></input>
        <br/>
        <label >Age</label>
        <input onChange={(e)=>{setNewAge(e.target.value)}}></input>
        <br/>
        <button onClick={Click}>Add User</button>
      </div>
      <div>
        {
          user.map(ele=>{
            return (
              <div>
                <h1>Name : {ele.name}</h1>
                <h1>Age: {ele.age}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
