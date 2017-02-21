import model from './model';

export function list(req, res) {
  res.status(200).json(model.data);
}

export function load(req, res) {
  const task = model.get(req.params.id);
  // dont proceed with invalid task
  task
  ? res.status(200).json(task)
  : res.status(404).json({ error: true, message: 'not found' });
}

export function save(req, res) {
  const data = req.body;
  
  // persist task data and return
  const task = model.insert({ title: data.title, description: data.description });
  res.status(201).json(task);
}

export function update(req, res) {
  const id = req.params.id;

  // dont proceed with invalid task
  const task = model.get(id);
  if (!task) {
    res.status(404).json({ error: true, message: 'not found' });
    return;
  }

  // update task data
  const data = req.body;
  task.title = data.title;
  task.description = data.description;

  // persist and return
  model.update(task);
  res.status(201).json(task);
}

export function remove(req, res) {
  const id = req.params.id;

  // dont proceed with invalid task
  const task = model.get(id);
  if (task) { model.remove(task); }

  res.status(200).json({});
}