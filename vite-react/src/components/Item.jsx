import "./item.css";

const item = ({ todo, changeTodosStatus }) => {
  const toggleIem = (e) => {
    const id = e.target.dataset.id;
    changeTodosStatus(id);
  };
  const itemClassName = todo.status === "done" ? "done" : "";
  return (
    <li data-id={todo.id} className={itemClassName} onClick={toggleIem}>
      {todo.title}
    </li>
  );
};

export default item;
