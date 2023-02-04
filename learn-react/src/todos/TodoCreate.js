function TodoCreate({ onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button> 등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
