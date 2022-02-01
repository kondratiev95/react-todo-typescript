import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { credentials } from "../../typescript/types";
import { sendCredentialRequestAC } from "../../redux/actionsCreator";

const Registration: React.FC = () => {
    const [credentials, setCredentials] = useState<credentials>({ username: '', password: ''})
    const [checkPassword, setCheckPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [visible, setViseble] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const dispatch = useDispatch();

    const confirmPassword = (e: any) => {
        setCheckPassword(e.target.value);
    }

    const handleChange = (event: any) => setCredentials({ ...credentials, [event.target.name]: event.target.value });

    const handleSubmit = () => {
        if(credentials.password !== checkPassword) {
            setError('Пароли не совпадают')
        } else if (credentials.username.trim().length === 0) {
            setError('Поле username не может быть пустым');
        } else if(credentials.username.trim().length < 3) {
            setError('Введите больше трех символов');
        } else if(/(?=.*\d)(?=.*[a-z])/i.test(credentials.password) === false) {
            setError('Пароль должен содержать буквы и цифры')
        } else {
            setError('');
            setCredentials({ password: '', username: ''})
            setCheckPassword('');
            console.log('Успех', credentials.password);
            dispatch(sendCredentialRequestAC(credentials));
        }
    }


    const classes = useStyles();
    return (
        <div>
        <h1 className={classes.header}>Sign up</h1>
        <p className={classes.error}>{error}</p>
        <form>

            <div className={classes.inputBlock}>
                <InputBase
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={credentials.username}
                    classes={{ root: classes.inputRoot }}
                />
            </div>

            <div className={classes.inputBlock}>
                <InputBase
                    name="password"
                    type={show ? 'text' : 'password'}
                    placeholder="password"
                    onChange={handleChange}
                    value={credentials.password}
                    classes={{ root: classes.inputRoot }}
                />
                <span 
                    onClick={() => setShow(!show)} 
                    className={show ? classes.inputSpanDark : classes.inputSpanLight}
                >
                    <img 
                        src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png" 
                        className={classes.inputGlass}
                        alt="eye.png" 
                    />
                </span>
            </div>

            <div className={classes.inputBlock}>
            <InputBase
                name="confirmPassword"
                type={visible ? 'text' : 'password'}
                placeholder="confirm password"
                onChange={confirmPassword}
                value={checkPassword}
                classes={{ root: classes.inputRoot }}
            />
                <span 
                    onClick={() => setViseble(!visible)} 
                    className={visible ? classes.inputSpanDarkConfirm : classes.inputSpanLightConfirm}
                >
                    <img 
                        src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png" 
                        className={classes.inputGlass}
                        alt="eye.png" 
                    />
                </span>
            </div>

            <Button
                disableFocusRipple
                variant="contained"
                color="secondary"
                classes={{ root: classes.button }}
                onClick={handleSubmit}
            >
            Sign up
            </Button>
        </form>
        </div>
  );
};

export default Registration;
