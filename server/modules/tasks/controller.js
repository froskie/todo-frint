import model from './model';

export function list(req, res) {
  res.status(200).json(model.data);
}

export function load(req, res) {
  const task = model.get(req.params.id);
  if (!task) {
    res.status(404).json({ error: true, message: 'not found' });
    return;
  }
  res.status(200).json(model.find());
}

export function save(req, res) {
  const data = req.body;
  console.log(data);
  
  const task = model.insert({
    title: data.title,
    description: data.description
  });
  
  res.status(200).json(task);
}

export function update(req, res) {

}

export function remove(req, res) {

}