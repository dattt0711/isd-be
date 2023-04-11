

const { connectDatabase } = require('../../utils/shared');

const UsersSchema = require('../Users');
const ProductsShema = require('../Products');
const models = {};

module.exports = {
    users: UsersSchema,
    products: ProductsShema,

    connectToModels: ({databaseName, currentModels = [], otherModels = []}) => {
        const conn = connectDatabase(databaseName);
        otherModels.map((model) => {
            conn.model(model, models[model]);
        });
        const objCurrentModels = currentModels.reduce((initObj, currModel) => {
            initObj[currModel] = conn && conn.model ? conn.model(currModel, models[currModel]) : null;
            return initObj;
        }, {});
        objCurrentModels.connectToModel = (model) => {
            conn.model(model, models[model]);
        };
        return objCurrentModels;
    },
};
