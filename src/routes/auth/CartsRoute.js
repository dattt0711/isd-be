const cartsController = require('../../controllers/CartsController').AUTH;
const {
    verifyToken,
} = require('../../utils/common');
function CartsRoute(apiRouter) {
    // Create a new product
    apiRouter.route('/carts/create').post(cartsController.create);
    apiRouter.route('/carts/list').get(cartsController.list);

}
module.exports = CartsRoute;