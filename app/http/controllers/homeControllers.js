const Menu = require('../../models/menu')
function homecontroller(){
    return {
        // fetching the data
         async index(req,res) {
             const pizzas = await Menu.find()
             console.log(pizzas)
             return res.render('home', {pizzas:pizzas})


            // fetching the data
            // Menu.find().then(function(pizzas) {
            //     console.log(pizzas)
            //     res.render('home',{
            //         pizzas:pizzas
            //     })
            // })
            
        }
    }
}
module.exports = homecontroller