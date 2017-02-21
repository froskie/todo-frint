'use strict';

import Express from 'express';
import bodyParser from 'body-parser';

// initialize the app
const app = new Express();

// apply default middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// add todos middleware
import todosRouter from './modules/tasks/router';
app.use('/tasks', todosRouter);

// render static page
app.use(Express.static(__dirname + '/../public'));
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// initialize the server
app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
