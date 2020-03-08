import React from 'react';
import Form from "../form/Form"
import TableWrapper from "../table/Table"
import styles from "./App.module.css"
const App =()=> {
  return (
 <div className={styles.container}>
 <Form />
 <TableWrapper/>
 </div>
  );
}

export default App;
