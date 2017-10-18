const todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My Todos:', this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};