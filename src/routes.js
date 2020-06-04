const { Router } = require('express')
const passport = require('passport')

const SchemaPassport = require('./app/middlewares/Auth')
const AssistedController = require('./app/controllers/AssistedController')
const MemberFamilyController = require('./app/controllers/MemberFamilyController')
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const routes = new Router()

routes.post('/user', UserController.store)
routes.get('/user/:email', UserController.show)
routes.get('/user/', UserController.index)
routes.post('/session', SessionController.store)

passport.use(SchemaPassport)
routes.use(passport.authenticate('jwt', { session: false }))

routes.put('/user/', UserController.update)

routes.post('/assisted', AssistedController.store)
routes.get('/assisted', AssistedController.index)
// use ?type=[TYPE] after id as query param to set the type of search
routes.get('/assisted/:id', AssistedController.show)
routes.put('/assisted/update/:id', AssistedController.update)
routes.delete('/assisted/:id', AssistedController.destroy)

routes.post('/memberfamily', MemberFamilyController.store)
routes.get('/memberfamily/:idAssisted', MemberFamilyController.index)
routes.get('/memberfamily/search/:id', MemberFamilyController.show)
routes.put('/memberfamily/update/:id', MemberFamilyController.update)
routes.delete('/memberfamily/delete/:id', MemberFamilyController.destroy)

module.exports = routes
