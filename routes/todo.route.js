const router = require('express').Router();
const TodoDb = require('../models/todo.model');

router.get('/', async (req, res) => {
  try {
    const allTodo = await TodoDb.find();
    res.status(200).json(allTodo);
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  const newTodo = new TodoDb(req.body);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(error);
  }
});
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const findTodo = await TodoDb.findByIdAndUpdate(id, {
      text: req.body.text,
    });
    res.status(201).json(findTodo);
  } catch (error) {
    console.log(error);
  }
});
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const findTodo = await TodoDb.findByIdAndDelete(id);
    res.status(201).json({ message: 'the Todo is deleted successfully' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const findTodo = await TodoDb.findOne({ _id: id });
    res.status(201).json(findTodo);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
