const Header = ({ todos }) => {
  const todoCount = todos.filter((v) => v.status === "todo").length;

  return (
    <div>
      <h1>TODO LIST</h1>
      <p>할일: {todoCount}</p>
    </div>
  );
};

export default Header;
