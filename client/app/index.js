import { createApp } from 'frint';

import RootComponent from '../component/Root';
import RootReducer from '../reducers';

export default createApp({
  name: 'ToDo',
  component: RootComponent,
  initialState: {},
  reducer: RootReducer,
});