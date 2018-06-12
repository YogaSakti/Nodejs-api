var express = require('express');
var Mhs = require('./controller/MhsController');

module.exports = function(app, express) {
    var router = express();

    // api/v1/Mhs
    router.route('/mhs')
      .get(Mhs.getAll);

    // api/v1/Mhs/create
    router.route('/mhs/create')
      .post(Mhs.create);

    // api/v1/Mhs/:name
    router.route('/mhs/:name')
      .get(Mhs.findByName);

    // api/v1/Mhs/delete/
    router.route('/mhs/delete/')
      .delete(Mhs.findAndRemove);

    // api/v1/Mhs/update/
    router.route('/mhs/update/')
      .put(Mhs.findAndUpdate);

    return router;
};