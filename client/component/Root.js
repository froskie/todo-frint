import { createComponent } from 'frint';

import Form from './Form';
import List from './List';

export default createComponent({
  render() {
    return (
      <div className="container">
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