import React, { Component } from 'react';
import Add from './add';
import Input from './input';

class App extends Component {
    constructor(props) {
      super(props);

        this.state = {
          todoList: [{}]
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        }
/* --------------------------------------------------------------------------CLICK/EVENT HANDLERS------------------------------------------------------------------------------ */
/* -------------------------------------------------------------------------------CHANGE------------------------------------------------------------------------------ */

      handleChange(event) {
          event.preventDefault();
          let name = event.target.name;
          let value  = event.target.value;
          this.setState({
            [name]:value,
          })
      }
/* -------------------------------------------------------------------------------DELETE------------------------------------------------------------------------------ */

     handleDelete(index) {
          let todoList = this.state.todoList;
          let y= todoList.splice(index, 1);

          this.setState({
            todoList: todoList
            })
      }
/* -------------------------------------------------------------------------------CHECKED------------------------------------------------------------------------------ */

      clickCheck(index) {
        let isCheck = this.state.todoList[index].isCheck;
        let todoList = this.state.todoList

        if (isCheck === true){
          alert('Unchecking task: "' + todoList[index].todo + '"  Back to the grind!');
          todoList[index].isCheck = false;
          this.setState({todoList: todoList})}
        else{
          alert('Congratulations on completing your task: "' +  todoList[index].todo + '" ! One small victory at a time!')
          todoList[index].isCheck = true;
          this.setState({todoList: todoList})}

      }
/* --------------------------------------------------------------------------------EDIT------------------------------------------------------------------------------ */

      clickEdit(index){
        this.state.todoList[index].isEdit= true;
        let todoList = this.state.todoList

        this.setState({todoList:todoList})
      }

      handleEdit(index) {
        let todoEdit = this.state.todoList.slice();
        let textEdit = document.getElementById('todoEdit').value
        let priorityEdit = document.getElementById('editSelect').value;
        todoEdit[index] = {todo: textEdit, priority: priorityEdit}

        this.setState({
            todoList: todoEdit
          })
      }

/* ----------------------------------------------------------------------------------ADD------------------------------------------------------------------------------ */

    handleClick(event) {
          event.preventDefault();
          let todo = this.state.todo;
          let priority = this.state.priority;
          let todoObj = {todo: this.state.todo, priority: this.state.priority, isEdit: false, isCheck: false};
          let todoDefault = document.getElementById('todo').value= '';
          let selectDefault = document.getElementById('select').value= 'select';

          this.setState({
            todo: todoDefault,
            priority: selectDefault
          })

/* ---------------------------------------------------------------------------INPUT VALIDATION--------------------------------------------------------------------------------- */
          if (priority === 'select' || todo === '') {
                  alert("YOU MUST ADD A TODO LIST ITEM AND SELECT A PRIORITY")

                  document.getElementById('todo').value= todo;            //retains value entered in compliant field
                  document.getElementById('select').value= priority;      //
                  this.setState({                                         //
                    todo: todo,                                           //
                    priority: priority                                    //
                  })                                                      //retains value entered in compliant field
                }

                else {
                  let todoArr = this.state.todoList.concat(todoObj);
                      if (todoArr[0].todo === undefined){              //removes default task when first task is added
                        let todoSplice = todoArr.splice(0,1);             //
                      }                                                   //removes default task when first task is added

                  this.setState({
                        todoList: todoArr
                  })}
                          }

/* ----------------------------------------------------------------------------------RENDER------------------------------------------------------------------------------ */
    render() {

    return (
      <div className='container'>
        <h1 className='title'>Very Simple Todo App</h1>
        <h4 className='title'>Track all of the things </h4>
        <hr className='style8'/>

{/* -------------------------------------------------------------------------------TODO INPUT-------------------------------------------------------------------------------- */}

          <Input onChange={this.handleChange}
                 value={this.todo}
                 priority={this.priority}
                 onChange={this.handleChange}
                 onClick={this.handleClick}   />

        <div className='col-md-1'></div>
{/* -------------------------------------------------------------------------------TODO LIST----------------------------------------------------------------------------- */}
        <div className='container'>
              <div className='panel panel-default col-md-7'>
                  <div className='panel-title panel-heading'>View Todos:</div>

                    {this.state.todoList.map((list, index) => (
                     <Add todo={list.todo}
                          priority={list.priority}
                          key={index}
                          isEdit={list.isEdit}
                          isCheck={list.isCheck}
                          onChange={this.handleChange}
                          onClick={this.handleClick}
                          handleDelete={this.handleDelete.bind(this, index)}
                          clickEdit={this.clickEdit.bind(this, index)}
                          clickCheck={this.clickCheck.bind(this, index)}
                          handleEdit={this.handleEdit.bind(this, index)}   />))}
              </div>
        </div>

      </div>
    );
  }
}

export default App;

