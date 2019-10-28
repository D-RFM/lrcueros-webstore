const notesCtrl = {};

const Note = require('../models/note.model');

notesCtrl.getAllNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};
notesCtrl.createNote = async (req, res) => {
    const { title, description, date, author } = req.body;
    const newNote = new Note({
        title: title,
        description: description,
        date: date,
        author: author
    })

    await newNote.save();
    res.json({message: 'save note'})
};
notesCtrl.getOneNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json(note)
};

notesCtrl.updateOneNote = async (req, res) => {
    const { title, description, author} = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title,
        description,
        author
    })
    res.json({message: 'updated note'})
};

notesCtrl.deleteOneNote = async(req, res) => {
    await Note.findOneAndDelete(req.params.id)
    res.json({message:'deleted note'})
};




module.exports = notesCtrl;

