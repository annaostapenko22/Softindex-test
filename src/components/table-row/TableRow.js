import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import styles from "../table/Table.module.css";

const TableRow = ({
  id,
  firstName,
  lastName,
  phone,
  gender,
  age,
  handleDelete
}) => {
  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(id)}
          className={styles.deleteButton}
        >
          <HighlightOffIcon />
        </button>
      </td>
      <td className="text-left">{firstName}</td>
      <td className="text-left">{lastName}</td>
      <td className="text-left">{phone}</td>
      <td className="text-left">{gender ? "male" : "female"}</td>
      <td className="text-left">{age}</td>
    </tr>
  );
};
export default TableRow;
