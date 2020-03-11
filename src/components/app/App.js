import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import TableWrapper from "../table/Table";
import styles from "./App.module.css";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://softindex-test.firebaseio.com/posts.json"
      );
      if (data) {
        const items = Object.entries(data.data);
        const resItems = items.map(item => {
          const id = item[0];
          const newData = { ...item[1], id };
          return newData;
        });
        setPosts(resItems);
      }
      getData();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Form posts={posts} setPosts={setPosts} />
      <TableWrapper posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
