'use strict';
module.exports = function(app) {
  var imageList = require('../controllers/imageController');

  // todoList Routes
  app.route('/images')
    .get(imageList.list_all_images)
    .post(imageList.create_a_image);


  app.route('/images/:imageId')
    .get(imageList.read_a_image)
    .put(imageList.update_a_image)
    .delete(imageList.delete_a_image);
};