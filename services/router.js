const SampleController = require('../controllers/sampleController');
var router = require('express').Router();

router.route('/sample')
  .post(SampleController.sample);

module.exports = router;
