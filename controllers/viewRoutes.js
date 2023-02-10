const router = require('express').Router();

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
  res.render('todo', { user: req.user

  })
 } catch (err) {
  res.status(500).json(err)
 }
})

module.exports = router;
