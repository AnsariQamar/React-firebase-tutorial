import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import { db } from './firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
export default function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data);
    };
    getUsers();
  }, []);
  useEffect(() => {}, [newName]);
  // console.log(user);
  // console.log(newName);
  const Click = async () => {
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    console.log(userDoc);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newField);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <label>Name</label>
        <input
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        ></input>
        <br />
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        ></input>
        <br />
        <div>
          <button onClick={Click}>Add User</button>
        </div>
      </div>
      <div>
        {user.map((ele) => {
          return (
            <div>
              <h1>Name : {ele.name}</h1>
              <h1>Age: {ele.age}</h1>
              <button
                onClick={() => {
                  updateUser(ele.id, ele.age);
                }}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(ele.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
