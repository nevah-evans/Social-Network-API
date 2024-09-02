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
router.route("/").get(getAllThoughts).post(createThought);


// /api/thoughts/:thoughtsId
router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);


// /api/thoughts/:thoughtsId/reactions
router.route("/:thoughtId/reactions").post(addReaction)

// /api/thoughts/:thoughtsId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;

// 66d5f0e38e7407d3f3d6dc80 main thought

