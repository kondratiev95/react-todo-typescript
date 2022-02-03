import React, { useState } from "react";
import useStyles from "./styles";
import { InputBase } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { SIGN_UP } from "../../../path";


const Signin: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);

    const classes = useStyles();

    return (
        <div className={classes.authBlock}>
            <h1 className={classes.header}>Sign in</h1>
                <div className={classes.inputUsername}>
                    <InputBase 
                        type="text" 
                        placeholder="username"
                    />
                </div>
                <div>
                <OutlinedInput
                    name="password"
                    classes={{ root: classes.inputBlock}}
                    type={visible ? 'text' : 'password'}
                    placeholder='confirm password'
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
            <Button classes={{ root: classes.authBtn}}>Sign in</Button>
        </div>
    )
}

export default Signin;