import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from "axios";
import styles from "./Form.module.css";
import {
  isEmptyValidator,
  isShortValidator,
  isNumberValidator
} from "../../helpers/helpers";

const Form = ({ posts, setPosts }) => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [errorAge, setErrorAge] = useState(false)

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "age":
        setAge(value);
        break;
      default:
        break;
    }
  };
  const handleFocus = () => {
    setErrorFirstName(false);
    setErrorLastName(false);
    setErrorPhone(false);
    setErrorAge(false)
  };

  const handleBlur = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name);
    if (name === "firstName") {
      const isEmptyString = isEmptyValidator(value);
      const isShortString = isShortValidator(value, 2);
      if (!isEmptyString && !isShortString) {
        setFirstName(value);
      } else {
        setErrorFirstName(true);
      }
    } else if (name === "lastName") {
      const isEmptyString = isEmptyValidator(value);
      const isShortString = isShortValidator(value, 2);
      if (!isEmptyString && !isShortString) {
        setLastName(value);
      } else {
        setErrorLastName(true);
      }
    } else if (name === "phone") {
      console.log(name);
      const isEmptyField = isEmptyValidator(value);
      const isNumberShort = isShortValidator(value, 7);
      const isNumber = isNumberValidator(value);
      if (!isEmptyField && !isNumberShort && isNumber) {
        setPhone(parseInt(value));
      } else {
        setErrorPhone(true);
      }
    }
    else if (name === "age") {
      const isEmptyField = isEmptyValidator(value);
      const isNumber = isNumberValidator(value);
      if (!isEmptyField && isNumber)  {
        setAge(parseInt(value))
      } else {
        setErrorAge(true)
      }
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
      const {
        data: { name }
      } = await axios.post(
        `https://softindex-test.firebaseio.com/posts.json`,
        post
      );

      setPosts([...posts, { ...post, id: name }]);
      setFirstName("");
      setLastName("");
      setPhone("");
      setAge("");
      setGender("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {!errorFirstName ? (
        <TextField
          variant="outlined"
          label="First Name"
          onChange={handleChange}
          name="firstName"
          value={firstName}
          onBlur={handleBlur}
        />
      ) : (
        <TextField
          error
          id="outlined-error-helper-text"
          helperText="Incorrect entry."
          variant="outlined"
          name="firstName"
          value={firstName}
          onFocus={handleFocus}
        />
      )}
      {!errorLastName ? (
        <TextField
          variant="outlined"
          label="Last Name"
          onChange={handleChange}
          name="lastName"
          value={lastName}
          onBlur={handleBlur}
        />
      ) : (
        <TextField
          error
          id="outlined-error-helper-text"
          helperText="Incorrect entry."
          variant="outlined"
          name="lastName"
          value={lastName}
          onFocus={handleFocus}
        />
      )}

      {!errorPhone ? (
        <TextField
          variant="outlined"
          label="Phone"
          onChange={handleChange}
          name="phone"
          value={phone}
          onBlur={handleBlur}
        />
      ) : (
        <TextField
          error
          id="outlined-error-helper-text"
          helperText="Incorrect entry."
          variant="outlined"
          name="phone"
          value={phone}
          onFocus={handleFocus}
        />
      )}
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
     {!errorAge ? (
      <TextField
        variant="outlined"
        label="Age"
        onChange={handleChange}
        name="age"
        value={age}
        onBlur={handleBlur}
      />
     ) : <TextField
     error
     id="outlined-error-helper-text"

     helperText="Incorrect entry."
     variant="outlined"
     name="age"
     value={age}
     onFocus={handleFocus}
   />} 
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
