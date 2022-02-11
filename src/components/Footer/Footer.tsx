import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosSelector, filterTypeSelector } from "../../redux/selectors/selectors";
import { deleteCompletedRequestAC, setCurrentTypeAC } from "../../redux/actionsCreator";
import { Button } from '@material-ui/core';
import useStyles from "./styles";
import { Todo } from "../../typescript/types";


const Footer: React.FC = () => {
  
  const [isTodoCompleted, setIsTodoCompleted] = useState<boolean>(false);
  const type: string = useSelector(filterTypeSelector);
  const todos: Todo[] = useSelector(getTodosSelector);
  const counter: number = useMemo(() => todos.filter((item: Todo) => item.completed === false).length, [todos]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const filterType = useCallback((e) => {
    const currentType = e.target.innerText
    dispatch(setCurrentTypeAC(currentType))
  },[dispatch])

  const removeCompletedTodo = useCallback(() => {
    dispatch(deleteCompletedRequestAC());
  }, [dispatch]);

  useEffect(() => {
    const isCompletedItem: boolean = todos.some((todo: Todo) => todo.completed);
    if (isCompletedItem) {
      setIsTodoCompleted(true);
    }
  }, [todos]);

  useEffect(() => {
    const isCompletedItem = todos.some((todo: Todo) => todo.completed);
    if (isTodoCompleted !== isCompletedItem) {
      setIsTodoCompleted(isCompletedItem);
    }
  }, [todos, isTodoCompleted])

  return (
    <div className={classes.todoFooter}>
      <div className={classes.counter}>{`${counter} ${counter === 1 ? "item" : "items"} left`}</div>
      <div className={classes.filterBtns}>
        <Button
          value="all"
          onClick={filterType}
          className={`${classes.filterBtn} ${type === "all" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          all
        </Button>
        <Button
          data-my-data="active"
          onClick={filterType}
          size="small" 
          className={`${classes.filterBtn} ${type === "active" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          active
        </Button>
        <Button
          value="completed"
          onClick={filterType}
          className={`${classes.filterBtn} ${type === "completed" ? classes.focusBtn : ''}`}
          classes={{ label: classes.label, root: classes.root }}
        >
          completed
        </Button>
      </div>
      {isTodoCompleted ? (
        <Button
          size="small"
          onClick={removeCompletedTodo}
          className={classes.clearCompleted}
          classes={{ label: classes.label, root: classes.root }}
        >
          clear completed
        </Button>
      ) : null}
    </div>
  );
};
export default Footer;

