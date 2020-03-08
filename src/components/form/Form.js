import React from 'react'
import TextField from "@material-ui/core/TextField"
import styles from  "./Form.module.css"
import Button from '@material-ui/core/Button';

const Form = () => {
    return(
        <>
        <form className={styles.form}>
            <TextField variant="outlined" label="First Name" />
            <TextField variant="outlined" label="Last Name"/>
            <TextField variant="outlined" label="Phone"/>
            <TextField variant="outlined" label="Gender"/>
            <TextField variant="outlined" label="Age" />
            <Button variant="contained" color="primary" className={styles.buttonSubmit}>
        Submit
      </Button>
        </form></>
    )
}

export default Form;