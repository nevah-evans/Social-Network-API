const router = require('express').Router();

const {

} = require('../../controller/thoughtController.js');

///api/thoughts
router.route("/thoughts")

router.route("/api/:thoughts")


module.exports = router;