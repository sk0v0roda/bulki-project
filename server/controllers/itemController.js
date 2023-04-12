const uuid = require('uuid')
const path = require('path')
const {Item} = require('../models/models')
const ApiError = require('../error/ApiError')
class ItemController {
    async create(req, res, next) {
        try {
            const {name, description, price, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const item = await Item.create({name, description, price, img: fileName})
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try {
            const items = await Item.findAll();
            return res.json(items);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne({
            where: {id},
        })
        return res.json(item)
    }
}

module.exports = new ItemController()