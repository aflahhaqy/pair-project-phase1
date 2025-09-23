const {User, UserProfile, MerchantFood, Beverage, Order, Service} = require('../models')

class Controller{
    static async home(req, res) {
        try {
            let data = await MerchantFood.findAll({
                include: Beverage
            })
            res.render('home',{data})
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = Controller