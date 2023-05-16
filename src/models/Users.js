const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { ROLE } = require('../utils/constants');
const { common } = require('./Common');
<<<<<<< HEAD
const ObjectId = mongoose.Types.ObjectId;

=======
>>>>>>> 490bf8a227a7e82d1ddc39f750872a6157ade5b9
const usersBase = {
    username: {
        type: String, trim: true,
    },
    fullName: {
        type: String, trim: true,
    },
    dob: {
        type: String, trim: true,
    },
    phone: {
        type: Number, trim: true,
    },
    password: {
        type: String, trim: true
    },
    email: {
        type: String, trim: true
    },
<<<<<<< HEAD
    wishList: [{
        type: ObjectId, trim: true, ref: 'products'
    }],
    isAdmin: {
        type: Boolean, default: false
=======
    fullName: {
        type: String, trim: true,
    },
    sex: {
        type: String, trim: true,
    },
    dob: {
        type: String, trim: true,
    },
    address: {
        type: String, trim: true,
    },
    isAdmin: {
        type: Boolean, default: false,
>>>>>>> 490bf8a227a7e82d1ddc39f750872a6157ade5b9
    }
}
const users = { ...usersBase, ...common };
const UsersSchema = new Schema(users, { versionKey: false });
const UsersModels = mongoose.model('users', UsersSchema);
module.exports = UsersModels;