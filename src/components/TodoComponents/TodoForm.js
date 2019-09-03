    
import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({item: ''});
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <>
      <form onSubmit={this.submitItem} className="form">
        <input
          type="text"
          placeholder="Enter Task"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button type="submit">Add</button>
        
      </form>
      <button className="clear-btn" onClick={this.props.clearCompleted}>
      Clear Completed
  </button>
  </>
    );
  }
}

export default TodoForm;