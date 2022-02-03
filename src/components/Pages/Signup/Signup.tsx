import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { credentials } from "../../../typescript/types";
import { sendCredentialRequestAC } from "../../../redux/actionsCreator";
import { IconButton, OutlinedInput, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../../path";
import { useNavigate } from "react-router";


const Signup: React.FC = () => {
    const [credentials, setCredentials] = useState<credentials>({ username: '', password: ''})
    const [checkPassword, setCheckPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useDispatch();
    // const isRegistered = useSelector((state: any) => state.authReducer.isRegistered);
    // const navigate = useNavigate();

    const confirmPassword = (e: any) => {
        setCheckPassword(e.target.value);
    }

    const handleChange = (event: any) => setCredentials({ ...credentials, [event.target.name]: event.target.value });

    const signUp = useCallback(() => {
        const res = dispatch(sendCredentialRequestAC(credentials)) 
        console.log('res+++', res);
        
    }, [credentials, dispatch])

    const handleSubmit = () => {
        if(credentials.password !== checkPassword) {
            setError('Passwords fields should match')
        } else if (credentials.username.trim().length === 0) {
            setError('Field username cant be empty');
        } else if(credentials.username.trim().length < 3) {
            setError('Username shoul be more 3 symbols');
        } else if(/(?=.*\d)(?=.*[a-z])/i.test(credentials.password) === false) {
            setError('Password must contain letters and numbers');
        } else if(credentials.password.length < 5) {
            setError("Password cant be less 5 symbols")
        } else {
            setError('');
            console.log('Успех', credentials.password);
            signUp()
        }
    }

    const classes = useStyles();

    // useEffect(() => {
    //     if(isRegistered) navigate(`${SIGN_IN}?kurwa`)
    // }, [isRegistered])

    return (
        <div className={classes.signupBlock}>
            <h1 className={classes.header}>Sign up</h1>
            <p className={classes.error}>{error}</p>
            <div>
                <OutlinedInput
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={credentials.username}
                    classes={{ root: classes.inputBlock }}
                />
            </div>

            <div>
                <OutlinedInput
                    name="password"
                    classes={{ root: classes.inputBlock}}
                    type={show? 'text' : 'password'}
                    placeholder='password'
                    color='secondary'
                    value={credentials.password}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShow(!show)}
                            edge="end"
                            >
                            {show ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>


            <div>
                <OutlinedInput
                    name="password"
                    classes={{ root: classes.inputBlock}}
                    type={visible ? 'text' : 'password'}
                    placeholder='confirm password'
                    color='secondary'
                    value={checkPassword}
                    onChange={confirmPassword}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                            >
                            {visible? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>

            <Link to={SIGN_IN} className={classes.link}>I already have an account</Link>

            <Button
                disableFocusRipple
                variant="contained"
                color="secondary"
                classes={{ root: classes.button }}
                onClick={handleSubmit}
            >
                Sign up
            </Button>
    </div>
  );
};

export default Signup;
