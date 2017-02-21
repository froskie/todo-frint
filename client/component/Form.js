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
  render() {
    return (
      <form action="">
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
  }
});

export default mapToProps({
  dispatch: {
    addTodo: actions.add
  }
})(Form);