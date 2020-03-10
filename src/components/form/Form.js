import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from "axios";
import styles from "./Form.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "age") {
      setAge(value);
    }
    // switch (name) {
    //   case name === "firstName":
    //     setFirstName(e.target.value)
    //     break;
    //   case name === "lastName":
    //     setLastName(e.target.value)
    //     break;
    //   case name === "phone":
    //     setPhone(e.target.value)
    //     break;
    //   case name === "gender":
    //     setGender(e.target.value)
    //     break;
    //   case name === "age":
    //     setAge(e.target.value)
    //     break;
    //   default:
    //     break;
    // }
    console.log("here", phone);
  };
  const getData = async e => {
    e.preventDefault();
    const post = {
      firstName,
      lastName,
      phone,
      gender,
      age
    };
    console.log("phone", phone);
    if (firstName && lastName && phone && gender && age) {
      const data = await axios.post(
        `https://softindex-test.firebaseio.com/posts.json`,
        post
      );
      console.log(post);
      setFirstName("");
      setLastName("");
      setPhone();
      setAge();
      setGender();
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={getData}>
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
          name="gender1"
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
    </>
  );
};

export default Form;
