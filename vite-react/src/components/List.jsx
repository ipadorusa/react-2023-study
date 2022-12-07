import Item from './Item';

export default function List({ todos, loading, changeTodosStatus }) {
  let todoList = <div>loading...</div>;
  if (!loading)
    todoList = todos.map((todo) => <Item key={todo.id} todo={todo} changeTodosStatus={changeTodosStatus}></Item>);
  return <ul className="list">{todoList}</ul>;
}
