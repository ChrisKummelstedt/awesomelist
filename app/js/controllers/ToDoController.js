toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2')];

  self.addToDo = function(inputtext){
    self.todos.push(new ToDoFactory(inputtext));
  };

  self.deleteToDo = function(){
    self.todos.pop();
  };

}]);
