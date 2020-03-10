import React, { useEffect, useState } from "react";
import "./Table.module.css";
import axios from "axios";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {sortNumberItems} from "../../helpers/helpers"

const Table = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://softindex-test.firebaseio.com/posts.json"
      );
      const items = Object.entries(data.data);
      const resItems = items.map(item => {
        const id = item[0];
        const newData = { ...item[1], id };
        return newData;
      });
      setPosts(resItems);
    };
    getData();
  }, []);

  const sortFirstName = () => {
    const newData = [...posts]
    newData.sort((a,b)=> a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1)
    setPosts(newData)
  }
  const sortLastNames = () => {
    const newData = [...posts]
    newData.sort((a,b)=> a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1)
    setPosts(newData)
  }

  const sortPhones = () => {
    const newData = [...posts]
    newData.sort((a,b)=> a.phone - b.phone)
    setPosts(newData)
  }
const sortGenders = () => {
  const newData = [...posts]
  newData.sort((a,b)=> a.gender > b.gender ? 1 : -1)
  setPosts(newData)
}

const sortAge = () => {
  const newData = [...posts]
  newData.sort((a,b)=> a.age - b.age)
  setPosts(newData)
}

const deletePost = async (id) => {
 const data= await axios.delete(`https://softindex-test.firebaseio.com/posts/${id}.json`);
 console.log(data)
  const newData = [...posts]
  newData.filter(post=> post.id !== id)
  setPosts(newData);
  return newData;
}
  console.log(posts)
  return (
    <div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">First Name <button onClick={sortFirstName} >↓ ↑</button></th>
            <th className="text-left">Last Name <button onClick={sortLastNames}>↓ ↑</button></th>
            <th className="text-left">Phone <button onClick={sortPhones}>↓ ↑</button></th>
            <th className="text-left">Gender <button onClick={sortGenders}>↓ ↑</button></th>
            <th className="text-left">Age <button onClick={()=> sortNumberItems(posts, "age")}>↓ ↑</button></th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {posts.map(post => (
            <tr key={post.id}>
              
              <td className="text-left"><button className="delete" onClick={()=> deletePost(post.id)}><HighlightOffIcon/></button>{post.firstName}</td>
              <td className="text-left">{post.lastName}</td>
              <td className="text-left">{post.phone}</td>
              <td className="text-left">{post.gender}</td>
              <td className="text-left">{post.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
