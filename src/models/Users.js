const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ROLE } = require('../utils/constants');
const {common} = require('./Common');
const usersBase = {
    username: {
        type: String, trim: true, required: true,
    },
    password: {
        type: String, trim: true, required: true,
    },
    email: {
        type: String, trim: true, required: true,
    },
}
const users = {...usersBase, ...common};
const UsersSchema = new Schema(users, { versionKey: false });
const UsersModels = mongoose.model('users', UsersSchema);
module.exports = UsersModels;