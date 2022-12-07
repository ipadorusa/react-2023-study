const item = ({todo, changeTodosStatus}) => {
  const {title, id} = todo;
  const toggleIem = (e) => {
    const id = e.target.dataset.id;
    changeTodosStatus(id);
  }
  return (
    <li data-id={id} onClick={toggleIem}>{title}</li>
  )
}

export default item;
