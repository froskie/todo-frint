import { createComponent, mapToProps } from 'frint';

// actions
import * as actions from '../actions/todos';

const Form =  createComponent({
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({
      title: this.refs.title.value,
      description: this.refs.description.value
    });
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