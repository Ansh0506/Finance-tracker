const router = require('express').Router();

router.post('/home', (req, res) => {
  res.json({ success: true });
});

module.exports = router;