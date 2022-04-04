function customercontroller(){
    return {
        cart(req,res) {
            res.render('customer/cart')
        },
        update(req,res){
            return res.json({})
        }
    }
}
module.exports = customercontroller