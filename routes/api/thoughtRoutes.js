const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controller/thoughtController.js');

///api/thoughts
router.route("/thoughts").get(getAllThoughts).post(createThought);


// /api/thoughts/:thoughtsId
router.route("/:thoughts").get(getOneThought).put(updateThought).delete(deleteThought);


// /api/thoughts/:thoughtsId/reactions
router.route("/thoughts/:thoughtsId/reactions").post(addReaction).delete(deleteReaction);


module.exports = router;