describe('ToDoController', function() {

  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with the correct toDos', function(){
    var todo1 = new ToDoFactory('ToDo1', true);
    var todo2 = new ToDoFactory('ToDo2', false);
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a new to do', function(){
    var todo3 = new ToDoFactory('ToDo3', false);
    ctrl.addToDo("ToDo3");
    expect(ctrl.todos.pop()).toEqual(todo3);
  });

  it('deletes the last to do', function(){
    ctrl.deleteToDo();
    var todo1 = new ToDoFactory('ToDo1', true);
    expect(ctrl.todos).toEqual([todo1]);
  });
});
