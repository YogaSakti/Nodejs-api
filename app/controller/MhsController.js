var Mhs = require('./../models/Mhs');
var S = "Success: ";
var F = "Failed: ";

exports.create = function (req, res) {
  var mhs = new Mhs();
  mhs.npm = req.body.npm;
  mhs.name = req.body.name;
  mhs.jk = req.body.jk;
  mhs.kelas = req.body.kelas;

  mhs.save(function (err, mhs) {
    if (err) {
      res.status(500).json("There was a problem adding the information to the database.");
      console.log(F + "Create Data");
    } else {
      res.status(200).json(mhs);
      console.log(S + "Create Data");
    }
  });
};

exports.getAll = function (req, res) {
  Mhs.find(function (err, mhs) {
    if (err) {
      res.status(500).json("There was a problem finding the data.");
      console.log(F + "Get Data");
    } else {
      res.status(200).json(mhs);
      console.log(S + "Get Data");
    }
  });
};

exports.findByName = function (req, res) {
  Mhs.findOne(req.params.name, function (err, mhs) {
    if (err) {
      res.status(500).json("There was a problem finding the data.");
      console.log(F + "Search Data");
    }
    if (!mhs) {
      res.status(404).json("No mhs found.");
      console.log(F + "Search Data");
    } else {
      res.status(200).json(mhs);
      console.log(S + "Search Data");
    }
  });
};

exports.findAndRemove = function (req, res) {
  Mhs.findByIdAndRemove(req.body.id, function (err, mhs) {
    if (err) {
      res.status(500).json("There was a problem deleting the data.");
      console.log(F + "Delete Data");
    } else {
      res.status(200).json(mhs.name + " was deleted");
      console.log(S + "Delete Data");
    }
  });
};

exports.findAndUpdate = function (req, res) {
  Mhs.findByIdAndUpdate(req.body.id, req.body, {
    new: true
  }, function (err, mhs) {
    if (err) {
      res.status(500).json("There was a problem updating the mhs.");
      console.log(F + "Update Data");
    } else {
      res.status(200).json(mhs);
      console.log(S + "Update Data");
    }
  });
};