import React from "react";
import "./Table.module.css";
import axios from "axios";
import TableRow from "../table-row/TableRow";
import {
  sortItemsAscending,
  sortItemsDescending,
  sortBooleanItems
} from "../../helpers/helpers";
import styles from "./Table.module.css";

const Table = ({ posts, setPosts }) => {
  const sortAscending = (field, isNumber) => {
    const sortedPosts = sortItemsAscending(posts, field, isNumber);
    setPosts(sortedPosts);
  };

  const sortDescending = (field, isNumber) => {
    const sortedPosts = sortItemsDescending(posts, field, isNumber);
    setPosts(sortedPosts);
  };

  const sortByGender = (field, bool) => {
    const sortedData = sortBooleanItems(posts, field, bool);
    setPosts(sortedData);
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
      {posts ? (
        <table className="table-fill">
          <thead>
            <tr>
              <th>Actions</th>
              <th className="text-left">
                First Name
                <button
                  onClick={() => sortAscending("firstName")}
                  className={styles.sortButton}
                >
                  ↑
                </button>
                <button
                  onClick={() => sortDescending("firstName")}
                  className={styles.sortButton}
                >
                  ↓
                </button>
              </th>
              <th className="text-left">
                Last Name{" "}
                <button
                  onClick={() => sortAscending("lastName")}
                  className={styles.sortButton}
                >
                  ↑
                </button>
                <button
                  onClick={() => sortDescending("lastName")}
                  className={styles.sortButton}
                >
                  ↓{" "}
                </button>
              </th>
              <th className="text-left">
                Phone{" "}
                <button
                  onClick={() => sortAscending("phone", true)}
                  className={styles.sortButton}
                >
                  ↑
                </button>
                <button
                  onClick={() => sortDescending("phone", true)}
                  className={styles.sortButton}
                >
                  ↓{" "}
                </button>
              </th>
              <th className="text-left">
                Gender{" "}
                <button
                  onClick={() => sortByGender("gender", true)}
                  className={styles.sortButton}
                >
                  ↑
                </button>
                <button
                  onClick={() => sortByGender("gender", false)}
                  className={styles.sortButton}
                >
                  ↓{" "}
                </button>
              </th>
              <th className="text-left">
                Age
                <button
                  onClick={() => sortAscending("age", true)}
                  className={styles.sortButton}
                >
                  ↑
                </button>
                <button
                  onClick={() => sortDescending("age", true)}
                  className={styles.sortButton}
                >
                  ↓{" "}
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {posts.map(post => (
              <TableRow {...post} handleDelete={deletePost} key={post.id}/>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Table;
