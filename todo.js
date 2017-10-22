const todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty.');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        let todo = this.todos[i];
        if (todo.completed) {
          console.log('(x)', todo.todoText);
        } else {
          console.log('( )', todo.todoText);
        }
      }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function () {
    let completedTodos = 0;
    let totalTodos = this.todos.length;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }
    for (var i = 0; i < totalTodos; i++) {
      if (completedTodos === totalTodos) {
        this.todos[i].completed = false;
      } else {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

const displayTodosButton = document.getElementById('displayTodosButton');
const toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function () {
  todoList.displayTodos();
});