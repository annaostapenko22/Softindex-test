import React from "react";
import "./Table.module.css";
import axios from "axios";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { sortItemsAscending, sortItemsDescending } from "../../helpers/helpers";

const Table = ({ posts, setPosts }) => {
  const sortAscending = (field, isNumber) => {
    const sortedPosts = sortItemsAscending(posts, field, isNumber);
    setPosts(sortedPosts);
  };

  const sortDescending = (field, isNumber) => {
    const sortedPosts = sortItemsDescending(posts, field, isNumber);
    setPosts(sortedPosts);
  };

  const deletePost = async id => {
    await axios.delete(
      `https://softindex-test.firebaseio.com/posts/${id}.json`
    );
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    return updatedPosts;
  };

  return (
    <div>
      <table className="table-fill">
        <thead>
          <tr>
            <th>Actions</th>
            <th className="text-left">
              First Name
              <button onClick={() => sortAscending("firstName")}> ↑</button>
              <button onClick={() => sortDescending("firstName")}>↓ </button>
            </th>
            <th className="text-left">
              Last Name{" "}
              <button onClick={() => sortAscending("lastName")}> ↑</button>
              <button onClick={() => sortDescending("lastName")}>↓ </button>
            </th>
            <th className="text-left">
              Phone{" "}
              <button onClick={() => sortAscending("phone", true)}> ↑</button>
              <button onClick={() => sortDescending("phone", true)}>↓ </button>
            </th>
            <th className="text-left">
              Gender <button onClick={() => sortAscending("gender")}> ↑</button>
              <button onClick={() => sortDescending("gender")}>↓ </button>
            </th>
            <th className="text-left">
              Age
              <button onClick={() => sortAscending("age", true)}> ↑</button>
              <button onClick={() => sortDescending("age", true)}>↓ </button>
            </th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {posts.map(post => (
            <tr key={post.id}>
              <td>
                {" "}
                <button className="delete" onClick={() => deletePost(post.id)}>
                  <HighlightOffIcon />
                </button>
              </td>
              <td className="text-left">{post.firstName}</td>
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
