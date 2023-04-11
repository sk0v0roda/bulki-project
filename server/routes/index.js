const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')


router.use('/item', itemRouter)
router.use('/user', userRouter)

module.exports = router