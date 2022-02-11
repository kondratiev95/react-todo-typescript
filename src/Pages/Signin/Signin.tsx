import React, { useCallback, useEffect, useState } from "react";
import useStyles from "./styles";
import { InputBase } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { MAIN, SIGN_UP } from "../../path";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { sendLoginValueRequestAC, setDefaultRegistered } from "../../redux/actionsCreator";
import { getAccessToken } from "../../redux/selectors/selectors";


const Signin: React.FC = () => {

    const [signInValue, setSignInValue] = useState<any>({ username: '', password: ''})
    const [error, setError] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(getAccessToken)

    const handleInputs = (e: any) => {
        setSignInValue({ ...signInValue, [e.target.name]: e.target.value})
    } 

    const handleSubmit = () => {
        if(signInValue.username.trim().length === 0) {
            setError('Field username cant be empty')
        } else if(signInValue.username.trim().length < 3) {
            setError('Username shoul be more 3 symbols')
        } else if(/(?=.*\d)(?=.*[a-z])/i.test(signInValue.password) === false) {
            setError('Password must contain letters and numbers');
        } else if(signInValue.password.length < 5) {
            setError("Password cant be less 5 symbols")
        } else {
            setError('')
            signIn()
        }
    }

    const signIn = useCallback(() => {
        dispatch(sendLoginValueRequestAC(signInValue))
    }, [dispatch, signInValue])

    useEffect(() => {
        dispatch(setDefaultRegistered())
    }, [dispatch])
    
    useEffect(() => {
        if(accessToken) {
            navigate(MAIN)
        } 
    }, [accessToken, navigate])

    return (
        <div className={classes.authBlock}>
            <h1 className={classes.header}>Sign in</h1>
                <p className={classes.error}>{error}</p>
                <div className={classes.inputUsername}>
                    <InputBase 
                        type="text" 
                        name="username"
                        placeholder="username"
                        value={signInValue.username}
                        onChange={handleInputs}
                    />
                </div>
                <div>
                <OutlinedInput
                    name="password"
                    classes={{ root: classes.inputBlock}}
                    type={visible ? 'text' : 'password'}
                    placeholder='confirm password'
                    value={signInValue.password}
                    onChange={handleInputs}
                    color='secondary'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                            >
                            { visible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
                <Link to={SIGN_UP} className={classes.link}>Registration</Link>
                <Button 
                    className={classes.authBtn}
                    classes={{ root: classes.authBtn }}
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                Sign in
            </Button>
        </div>
    )
}

export default Signin;