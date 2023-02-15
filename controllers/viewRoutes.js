const router = require('express').Router();
const { User, Tasks } = require('../models')

//renders homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { user: req.user
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//renders todo
router.get('/todo', async (req, res) => {
 try {
  let userId = req.user.id

  let userHasTasks;

  const userCheckTasks = await Tasks.findAll({
    where: {
      user_id: userId
    }
  })

  if(userCheckTasks[0] === undefined) {
    userHasTasks = false
  } else {
    userHasTasks = true;
  }

  const usersCompleteTasks = await Tasks.findAll({
    where: {
      user_id: userId,
      complete: true
    }
 })

  const usersUnfinishedTasks = await Tasks.findAll({
   where: {
    user_id: userId,
    complete: false
  }
  })
 console.log(usersCompleteTasks)
 console.log(usersUnfinishedTasks)

  res.render('todo', { user: req.user, userId: userId, complete:  usersCompleteTasks, unfinished: usersUnfinishedTasks, hasTasks: userHasTasks
  })
 } catch (err) {
  res.status(500).json(err)
 }
})

module.exports = router;
