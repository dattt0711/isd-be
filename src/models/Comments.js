const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { generatorTime } = require('../utils/shared');
const { common } = require('./Common');
const ObjectId = mongoose.Types.ObjectId;
const mongoosePaginate = require('mongoose-paginate-v2');
const commentsBase = {
<<<<<<< HEAD
    comment: {
        type: String, trim: true,
    },
    // userObjId: {
    //     type: ObjectId, trim: true, ref: 'users'
    // },
    brief: {
        type: String, trim: true,
    },
    rating: {
        type: Number, trim: true,
=======
    review: {
        type: String, trim: true,
    },
    userObjId: {
        type: ObjectId, trim: true, ref: 'users'
>>>>>>> 490bf8a227a7e82d1ddc39f750872a6157ade5b9
    },
    productObjId: {
        type: ObjectId, trim: true, ref: 'products'
    },
    createdAt: {
        type: String, default: generatorTime()
    }
}
const comments = { ...commentsBase, ...common };
const commentsSchema = new Schema(comments, { versionKey: false });
commentsSchema.plugin(mongoosePaginate);
const commentsModels = mongoose.model('comments', commentsSchema);
module.exports = commentsModels;