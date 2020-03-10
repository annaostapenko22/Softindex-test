import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from "axios";
import styles from "./Form.module.css";

const Form = ({posts, setPosts}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "firstName":
        setFirstName(value)
        break;
      case "lastName":
        setLastName(value)
        break;
      case "phone":
        setPhone(value)
        break;
      case "gender":
        setGender(value)
        break;
      case "age":
        setAge(value)
        break;
      default:
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const post = {
      firstName,
      lastName,
      phone,
      gender,
      age
    };
    if (firstName && lastName && phone && gender && age) {
    const {data: {name}} = await axios.post(
        `https://softindex-test.firebaseio.com/posts.json`,
        post
      );
      
      setPosts([...posts, {...post, id: name}])
      setFirstName("");
      setLastName("");
      setPhone("");
      setAge("");
      setGender("");
    }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="First Name"
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />
        <TextField
          variant="outlined"
          label="Phone"
          onChange={handleChange}
          name="phone"
          value={phone}
        />
        <RadioGroup
          aria-label="gender"
          id={styles.radioGroup}
          onChange={handleChange}
          name="gender"
          value={gender}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <TextField
          variant="outlined"
          label="Age"
          onChange={handleChange}
          name="age"
          value={age}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.buttonSubmit}
          type="submit"
        >
          Submit
        </Button>
      </form>
  );
};
export default Form;
