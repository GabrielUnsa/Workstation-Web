const mongoose = require('mongoose')
const { Schema } = mongoose;

const stringSchema = {
    type: String,
    maxLength: 100,
    required: true,
    trim: true,
};

const userSchema =  new Schema({
    firstname: stringSchema,
    lastname: stringSchema,
    email: {
        ...stringSchema,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    courses: [{
        name: stringSchema,
        /*Estructura para datos tabulados*/
        role: {
            type: String,
            enum: ['student', 'teacher'],
            default: 'student',
        },
        payCourse: {
            type: Boolean,
            default: false,
        },
    }],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
});

const User = mongoose.model('User', userSchema);
/*Inicializamos el schema
User.init().then( () => {
    console.log('User schema initiated');
});
*/
module.exports = User;


