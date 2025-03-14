import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map(todo => (
        <GridItem key={todo.id}>
          <TodoListItem id={todo.id} text={todo.text} onDelete={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
