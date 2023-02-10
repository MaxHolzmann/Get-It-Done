const router = require('express').Router();
const { User, Task } = require('../../models');

//find tasks from any user
router.get('/tasks', async (req, res) => {
  try {
    const allTasks = await Task.findAll({
      include: [{model: User}]
    })
    res.status(200).json(allTasks)
  } catch (err) {
    res.status(500).json(err)
  }
})

//returns all tasks from a user
router.get('/tasks/:id', async (req, res) => {
  try {
    const allUsersTasks = await Task.findAll({
      where: {
        user_id: req.params.id
      }
    })
    res.status(200).json(allUsersTasks)
  } catch (err) {
    res.status(500).json(err)
  }
})

//create a new task
router.post('/tasks/:id', async (req, res) => {
  try {
    const newTask = await Task.create({
      task: req.body.task,
      user_id: req.params.id
    })
    res.status(200).json(newTask)
  } catch (err) {
    res.status(500).json(err)
  }
})

//edit a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const updateTask = await Task.update({
      task: req.body.task
    }, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updateTask)
  } catch (err) {
    res.status(500).json(err)
  }
})

//delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({message: "Deleted the task!"})
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;
