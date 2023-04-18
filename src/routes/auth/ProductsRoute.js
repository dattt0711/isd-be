const productsController = require('../../controllers/ProductsController').AUTH;
const {
    verifyToken,
} = require('../../utils/common');
function ProductsRoute(apiRouter) {
    // Create a new product
    apiRouter.route('/products/create').post(productsController.create);
    apiRouter.route('/products/list').get(productsController.list);

}
module.exports = ProductsRoute;