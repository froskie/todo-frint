import { createComponent, h } from 'frint';

import Form from './Form';
import List from './List';

export default createComponent({
  render() {
    const headerStyle = { textAlign: 'center', color: "#33C3F0", fontWeight: 'bold', margin: 0 };
    return (
      <div className="container">
        <h5 style={headerStyle}>Add a TODO</h5>
        <div className="row">
          <div className="three columns">&nbsp;</div>
          <div className="six columns">
            <Form />
            <hr/>
            <List />
          </div>
        </div>
      </div>
      
    );
  }
});