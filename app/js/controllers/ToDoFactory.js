toDoApp.factory('ToDoFactory', function(){
  var Todo = function(inputtext, completed){
    this.text = inputtext;
    this.completed = (typeof completed !== 'undefined') ? completed: false;
  };
  return Todo;
});
