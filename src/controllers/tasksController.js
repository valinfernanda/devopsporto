// Dummy in-memory store
let tasks = [];
let idCounter = 1;

exports.getTasks = (req, res) => res.json(tasks);

exports.createTask = (req, res) => {
  const task = { id: idCounter++, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);  // const task = tasks.find(t => t.id === Number(req.params.id)); // strict
  if (!task) return res.status(404).json({ message: 'Not found' });
  Object.assign(task, req.body);
  res.json(task);
};

exports.deleteTask = (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: 'Deleted' });
};
