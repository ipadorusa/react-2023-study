export default function List({ todos, loading }) {
  let todoList = <div>loading...</div>;
  if (!loading)
    todoList = todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
  return <ul className="list">{todoList}</ul>;
}
