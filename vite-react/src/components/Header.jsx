
const Header = ({todos}) => {
  console.log(todos)
  return (
    <div>
      <h1>TODO LIST</h1>
      <p>할일: {todos.length}</p>
    </div>
  )
}

export default Header;
