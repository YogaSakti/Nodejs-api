var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema model user
var MahasiswaSchema = new Schema({
  npm: String,
  name: String,
  jk: String,
  kelas: String
});

// export the Schema model user
module.exports = mongoose.model('Mhs', MahasiswaSchema);