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
    static async getRegister(req, res) {
        try {
            res.render('register')
        } catch (error) {
            res.send(error)
        }
    }
    static async postRegister(req, res) {
        try {
            res.render('register')
        } catch (error) {
            res.send(error)
        }
    }
    static async getLogin(req, res) {
        try {
            res.render('login')
        } catch (error) {
            res.send(error)
        }
    }
    static async postLogin(req, res) {
        try {
            res.render('login')
        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = Controller