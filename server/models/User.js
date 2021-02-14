const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        name: {
            type: String
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const User = model('User', userSchema)


module.exports = User;