const mongoose = require('mongoose');

const URI = 'mongodb://localhost/basedatos';

mongoose.connect(URI)
    .then(db => console.log('DB está conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;