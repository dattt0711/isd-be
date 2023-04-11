const productsController = require('../../controllers/ProductsController').AUTH;
const {
    verifyToken,
} = require('../../utils/common');
function ProductsRoute(apiRouter) {
    // Create a new product
    apiRouter.route('/products/create').post(productsController.create);

}
module.exports = ProductsRoute;