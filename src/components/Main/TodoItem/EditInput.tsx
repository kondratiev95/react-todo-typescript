import React, { FormEvent, KeyboardEvent } from "react";
import useStyles from "./styles";
import { Input } from '@material-ui/core';

type Props = {
  newValue: string,
  value: string,
  checked: boolean,
  onInput: (e: FormEvent) => void,
  onBlur: () => void,
  onInputKeyPress: (e: KeyboardEvent) => void,
}

export const EditInput: React.FC<Props> = ({newValue, value, onInput, onBlur, onInputKeyPress, checked}) => {

  const classes = useStyles();

  return (
    <li className="edit-item">
      <Input
        type="text"
        className={checked ? `${classes.inputEdit} ${classes.toggleCheckbox}` : classes.inputEdit}
        value={newValue}
        placeholder={value}
        onChange={e => onInput(e)}
        onBlur={onBlur}
        onKeyDown={e => onInputKeyPress(e)}
        disableUnderline={true}
        autoFocus
      />
    </li>
  );
};
