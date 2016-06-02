describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/');
    var todos = $$('#todos p');
    expect(todos.first().getText()).toEqual('ToDo1: Completed');
    expect(todos.last().getText()).toEqual('ToDo2: Incomplete');
  });

  it('can add a todo', function(){
    browser.get('/');
    $("#addtodo").sendKeys("ToDo3");
    $("#addtodobutton").click();
    var lasttodo = $$('#todos p').last().getText();
    expect(lasttodo).toEqual('ToDo3: Incomplete');
  });

  it('can delete a todo', function(){
    browser.get('/');
    $("#deletebutton").click();
    var todos = $$('#todos p');
    expect(todos.last().getText()).toEqual('ToDo1: Completed');
  });
});
