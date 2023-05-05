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
            let {limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let items = await Item.findAndCountAll({limit, offset})
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

    async delete(req, res) {
        const {id} = req.params
        const item = await Item.destroy({
            where: {id}
        })
        return res.json(item)
    }
    async update(req, res, next) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const [numRowsUpdated, updatedItem] = await Item.update(updates, { where: { id: id }, returning: true });
            if (numRowsUpdated !== 1) {
                next(ApiError(`Item with id ${id} not found`));
            }
            return res.json(updatedItem[0]);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ItemController()