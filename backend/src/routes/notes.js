const { Router } = require('express');
const router = Router();

const { getAllNotes,createNote,getOneNote,updateOneNote,deleteOneNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getAllNotes)
    .post(createNote)

router.route('/:id')
    .get(getOneNote)
    .put(updateOneNote)
    .delete(deleteOneNote)

module.exports = router;