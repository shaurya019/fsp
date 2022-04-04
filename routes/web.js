const homecontroller = require('../app/http/controllers/homeControllers')
const authcontroller = require('../app/http/controllers/authcontroller')
const customercontroller = require('../app/http/controllers/customer/customerController')
function initRoutes(app) {

    app.get('/', homecontroller().index)
    
    app.get('/login', authcontroller().login)

    app.get('/register', authcontroller().register)

    app.get('/cart', customercontroller().cart)
    app.get('/update-cart', customercontroller().update)
}


module.exports = initRoutes;