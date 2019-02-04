/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list(req, res) {
    Post.find({}).then(data => res.json(data));
  },

  getPost(req, res) {
    Post.find(req.params.id).then(post => res.ok(post));
  },

  update(req, res) {
    Post.update(req.params.id, req.body).then(data => res.ok(data));
  },

  create(req, res) {
    Post.create(req.body).then(post => res.ok(post));
  },

  delete(req, res) {
    Post.destroy(req.params.id ).then(article => res.ok(article));
  }
};
