const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: [true, 'You must fill all atributes'],
        maxLength: [30, 'You only have 30 characters available'],
        
        minLength: [5, 'Name has to have 5 characters at minimum'],

    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)