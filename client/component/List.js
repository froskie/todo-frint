import { createComponent, mapToProps } from 'frint';

// actions
import * as actions from '../actions/todos';

const List =  createComponent({
  afterMount() {
    this.props.list();
  },
  handleCheck(id, e) {
    e.preventDefault();
    this.props.remove(id);
  },
  render() {
    const linkStyles = { textAlign: 'right' };
    return (
      <div className="row">
        {
          this.props.todos.map(t => (
            <div className="row">
              <p className="eight columns">
                <b>{t.title}</b> - {t.description}
              </p>
              <p className="four columns" style={linkStyles}>
                <a href="" onClick={this.handleCheck.bind(this, t.$loki)}><i className="fa fa-check" aria-hidden="true"></i></a>
              </p>
            </div>
          ))
        }  
      </div>    
    );
  }
});

export default mapToProps({
  dispatch: {
    list: actions.list,
    remove: actions.remove
  },
  state(state) {
    return  {
      todos: state.todos
    };
  }
})(List);