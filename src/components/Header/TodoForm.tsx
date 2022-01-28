
import React, { useCallback } from "react";
import { Form } from "react-final-form";
import MainInput from "./MainInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodosSelector } from "../../redux/selectors/selectors";
import { addItemRequestAC } from "../../redux/actionsCreator";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import useStyles from "./styles";
import { Todo } from "../../typescript/types";

type Props = {
  handleAllCompleted: () => void,
  isAllCompleted: boolean
}

const TodoForm: React.FC<Props> = ({ handleAllCompleted, isAllCompleted }) => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(getTodosSelector);
  const classes = useStyles();

  const addItem = useCallback((val) => {
    dispatch(addItemRequestAC(val.todoInput));
  },[dispatch]);

  const handleAll = useCallback(() => {
    handleAllCompleted();
  }, [handleAllCompleted]);

  return (
    <div className={classes.todoForm}>
      {todos.length ? (
        <FlashOnIcon
          classes={{ root: 
            isAllCompleted
              ? `${classes.toggleAll} ${classes.darkOpacity}`
              : classes.toggleAll
          }}
          onClick={handleAll}
        />
      ) : null}
      <Form
        onSubmit={addItem}
        render={({ handleSubmit }) => <MainInput handleSubmit={handleSubmit} />}
      />
    </div>
  );
};
export default TodoForm;
