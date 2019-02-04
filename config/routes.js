/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'get /posts':"PostController.list",
    'get /posts/:id':'PostController.getPost',
    'put /posts/:id':'PostController.update',
    'post /posts':'PostController.create',
    'delete /posts/:id':'PostController.delete'

};
