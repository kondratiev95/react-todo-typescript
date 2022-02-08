import { useEffect, useCallback, useMemo, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosSelector } from "../../redux/selectors/selectors";
import TodoForm from "../Header/TodoForm";
import ListItem from "../Main/ListItem";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";
import { editTodoRequestAC, getTodoRequestAC, logout as logoutAction, toggleAllRequestAC } from "../../redux/actionsCreator";

import useStyles from "./styles.js";
import Preloader from "../Preloader/Preloader";
import { Todo } from "../../typescript/types";
import { editTodoType } from "../../typescript/types";
import { MAIN, SIGN_IN } from "../../path";

const Root: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const todosArray = useSelector(getTodosSelector);
  // const userName = useSelector(getUserName)
  const userName = localStorage.getItem('username')
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();


  const isAllCompleted: boolean = useMemo(
    () => todosArray.every((item: Todo) => item.completed),
    [todosArray]
  );

  const handleAllCompleted = useCallback(() => {
    dispatch(toggleAllRequestAC(isAllCompleted));
  }, [isAllCompleted, dispatch]);

  const editTodo: editTodoType = useCallback(
    (id, value) => {
      dispatch(editTodoRequestAC({ id, value }));
    },
    [dispatch]
  );

  const logout = () => {
    localStorage.clear();
    dispatch(logoutAction());
    navigate(SIGN_IN);
  }

  useEffect(() => {
    dispatch(getTodoRequestAC());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <h1>{`Hello ${userName}`}</h1>
      <button className="logout" onClick={logout}>logout</button>
      <h2 className={classes.todoHeader}>todos</h2>
      <div className={classes.todoContainer}>
        <TodoForm
          handleAllCompleted={handleAllCompleted}
          isAllCompleted={isAllCompleted}
        />
        <ListItem editTodo={editTodo} />
        {todosArray.length ? <Footer /> : null}
      </div>
    </div>
  );
};
export default Root;
