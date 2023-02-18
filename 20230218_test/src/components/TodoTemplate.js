import "../scss/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="template">
      <div className="title">Todo List</div>
      <div className="contnent">{children}</div>
    </div>
  );
};

export default TodoTemplate;
