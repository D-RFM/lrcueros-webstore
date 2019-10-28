const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: String

}, {
    timestamps: true  //mongoose tiene esta propiedad para guardar la fecha de creacion 
                        //y la fecha de actualizacion por nosotros
})

module.exports = model('Note', noteSchema);