const { Router } = require('express');
const AssistedController = require('./app/controllers/AssistedController');
const ResponsibleController = require('./app/controllers/ResponsibleController');
const ParentController = require('./app/controllers/ParentController');

const routes = new Router();

routes.post('/assisted', AssistedController.store);
routes.get('/assisted', AssistedController.index);
routes.get('/assisted/:id', AssistedController.show);
routes.put('/assisted/:id', AssistedController.update);
routes.delete('/assisted/:id', AssistedController.destroy);

routes.post('/responsible', ResponsibleController.store);
routes.get('/responsible', ResponsibleController.index);
routes.delete('/responsible/:id', ResponsibleController.destroy);

routes.post('/parent', ParentController.store);
routes.get('/parent', ParentController.index);
routes.delete('/parent/:id', ParentController.destroy);

module.exports = routes;
