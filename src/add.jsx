import React, { Component } from 'react';

export default class Add extends React.Component{
  constructor(props){
    super(props);
    }

    render() {
      var priorityStyle = this.props.priority == 1 ? 'well high-out' :
                              this.props.priority == 2  ? 'well med-out' :
                                  this.props.priority == 3  ? 'well low-out' : 'well default-out';

      return(

/* --------------------------------------------------------------------------------EDIT----------------------------------------------------------------------------- */
      this.props.todo === undefined ?
      (<div>
          <div className='panel panel-default'>
          <div className='panel-body default-out'>
          <strong>Welcome to Very Simple Todo App</strong><br/>
          Get started now by a adding a new todo on the left.
          </div>
          </div>

      </div>) :

      this.props.isEdit === true ?

       ( <div className='panel panel-default col-md-12' >

         <div className={priorityStyle} >
                <div className='panel-body'>
                <div className="form-group">
                  <label htmlFor="comment">Edit Descriptio:</label>
                  <textarea className='form-control update-todo-text'
                            name ='todo'
                            rows='5'
                            id='todoEdit'
                            defaultValue={this.props.todo}
                            onChange={this.props.onChange}/>
                  </div>

                  <div className='form-group'>
                      <label htmlFor='select' >Priority:</label><br></br>
                      <select className='dropdown update-todo-priority'
                              id='editSelect'
                              name='priority'
                              defaultValue={this.props.priority}
                              onChange={this.props.onChange} >
                                    <option value='select'>Select a priority</option>
                                    <option value='1'>HIGH</option>
                                    <option value='2'>MEDIUM</option>
                                    <option value='3'>LOW</option>
                       </select>
                  </div>
                </div>
              <button type='button' className='btn update-todo btn-success' onClick={this.props.handleEdit} >Save</button>

            </div>

         </div>) :

/* --------------------------------------------------------------------------------CHECK----------------------------------------------------------------------------- */

         this.props.isCheck === true ?

        (<div className={priorityStyle} >
          <ul>

             <li className='success'>  <label > <input type='checkbox' className='form-check-input spacing' id='checkbox' onClick={this.props.clickCheck} checked /><s> {this.props.todo}</s></label>
                    <a href='#'><span className="glyphicon glyphicon-edit pull-right spacing edit-todo" onClick={this.props.clickEdit}></span></a>
                    <a href='#'><span className="glyphicon glyphicon-trash pull-right spacing delete-todo" onClick={this.props.handleDelete} ></span></a>
            </li>
          </ul>
        </div>) :

/* --------------------------------------------------------------------------------REGULAR----------------------------------------------------------------------------- */

        (<div className={priorityStyle} >
          <ul>
            <li className='success'>
                    <label > <input type='checkbox' className='form-check-input spacing' id='checkbox' onClick={this.props.clickCheck}/> {this.props.todo}</label>
                    <a href='#'><span className="glyphicon glyphicon-edit pull-right spacing edit-todo" onClick={this.props.clickEdit}></span></a>
                    <a href='#'><span className="glyphicon glyphicon-trash pull-right spacing delete-todo" onClick={this.props.handleDelete} ></span></a>
          </li>
          </ul>
        </div>)


      );
      }
    }
