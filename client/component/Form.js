import { createComponent, mapToProps } from 'frint';

// actions
import * as actions from '../actions/todos';

const Form =  createComponent({
  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title;
    const description = this.refs.description;
    // first add the todo
    this.props.addTodo({ title: title.value, description: description.value });
    // clear the fields
    title.value = null;
    description.value = null;
    // focus back on title
    title.focus();
  },
  handleEdit(e) {
    e.preventDefault();
    const title = this.refs.title;
    const description = this.refs.description;
    // first add the todo
    this.props.updateTodo({ title: title.value, description: description.value }, this.props.todos.current.$loki);
    // clear the fields
    title.value = null;
    description.value = null;
    // focus back on title
    title.focus();
  },
  _renderAdd() {
    const headerStyle = { textAlign: 'center', color: "#33C3F0", fontWeight: 'bold', margin: 0 };
    return (
      <form action="">
        <h5 style={headerStyle}>Add a TODO</h5>
        <div className="row">
          <div className="six columns">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" ref="title" className="u-full-width"/>
          </div>
          <div className="six columns">
            <label htmlFor="description">Description</label>
            <input name="description" type="text" ref="description" className="u-full-width"/>
          </div>
        </div>
        <input type="submit" className="u-full-width button-primary" onClick={this.handleSubmit.bind(this)}/>
      </form>
    );
  },
  _renderEdit() {
    const headerStyle = { textAlign: 'center', color: "#DD4A68", fontWeight: 'bold', margin: 0 };
    const buttonStyle = { borderColor: "#DD4A68", backgroundColor: "#DD4A68", color: 'white' };
    const current = this.props.todos.current;
    return (
      <form action="">
        <h5 style={headerStyle}>Edit a TODO</h5>
        <div className="row">
          <div className="six columns">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" ref="title" className="u-full-width" placeholder={current.title} />
          </div>
          <div className="six columns">
            <label htmlFor="description">Description</label>
            <input name="description" type="text" ref="description" className="u-full-width" placeholder={current.description} />
          </div>
        </div>
        <input type="submit" className="u-full-width" style={buttonStyle} onClick={this.handleEdit.bind(this)}/>
      </form>
    );
  },
  render() {
    return this.props.todos.current
           ? this._renderEdit()
           : this._renderAdd();
  }
});

export default mapToProps({
  dispatch: {
    addTodo: actions.add,
    updateTodo: actions.update,
  },
  state(state) {
    return  { todos: state.todos };
  }
})(Form);