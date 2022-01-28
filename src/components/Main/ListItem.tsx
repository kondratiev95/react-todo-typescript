import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { filterTypeSelector, getTodosSelector, getErrorSelector } from "../../redux/selectors/selectors";
import Item from "./TodoItem/Item";
import { editTodoType, Todo } from "../../typescript/types";

type Props = {
  editTodo: editTodoType
}

const ListItem: React.FC<Props> = ({editTodo}) => {

  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);
  const errorMessage = useSelector(getErrorSelector);
  const classes = useStyles();

  const filteredTodos: Todo[] = useMemo(
    () =>
      todos.filter((item: Todo) => {
        if (type === "active") {
          return !item.completed;
        } else if (type === "completed") {
          return item.completed;
        } else {
          return item;
        }
      }),
    [todos, type]
  );

  return errorMessage === "" ? (
    <ul className={classes.todoList}>
      {filteredTodos.map((task: Todo) => (
        <Item
          task={task}
          key={task._id}
          editTodo={editTodo}
        />
      ))}
    </ul>
  ) : (
    <h4 className={classes.todoError}>{errorMessage}...</h4>
  );
};
export default ListItem;
