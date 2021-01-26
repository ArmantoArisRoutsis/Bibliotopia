import React,{useState} from 'react'
import useStyles from "./styles"
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core"
import LockedOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./Input"

const Auth = () => {
    const [showPassword,setShowPassword] = useState(false)

    const classes = useStyles();
    const isSignedUp = true;

    const handleSubmit = () =>{

    }

    const handleChange = () =>{

    }

    const handleShowPassword = () =>{
        setShowPassword((prev)=>!prev)
    }

    return (
        <div style={{marginTop:"200px"}}>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockedOutlinedIcon/>
                    </Avatar>
                    <Typography varinat="h5">{isSignedUp?"Sign Up":"Sign In"}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignedUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
                            {isSignedUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
