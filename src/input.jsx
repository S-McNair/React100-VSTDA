import React from 'react';

class Input extends React.Component {
  constructor(props)  {
  super(props);
  }

    render(){
      return(
<div id='parent-element'>

<div className='panel panel-default col-md-4' >
  <div className='panel-heading panel-title'>Add New Todo</div>
    <div className='panel-body'>

        <div className="form-group">
        <label htmlFor="comment">I want to:</label>
        <textarea className="form-control create-todo-text" name ='todo' rows="5" id="todo" value={this.props.todo} onChange={this.props.onChange} placeholder='Enter todo item...'/>
        </div>

        <div className='form-group'>
          <label htmlFor='select' >Priority Level:</label><br></br>
          <select className='dropdown create-todo-priority' id='select' name='priority' value={this.props.priority} onChange={this.props.onChange} >
          <option className="defaultValue" value='select'>Select a priority</option>
            <option value='1'>HIGH</option>
            <option value='2'>MEDIUM</option>
            <option value='3'>LOW</option>
          </select></div>
    </div>

    <div className='panel-footer'><button className='btn btn-success btn-add create-todo' onClick={this.props.onClick}>Add</button></div>
</div>

</div> //closing parent-element div

      );
    }
}

export default Input;
