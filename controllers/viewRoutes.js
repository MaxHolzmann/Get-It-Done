const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { user: req.user
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/todo', async (req, res) => {
 try {
  res.render('todo', { user: req.user

  })
 } catch (err) {
  res.status(500).json(err)
 }
})

module.exports = router;
