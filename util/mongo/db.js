const mongoose = require('mongoose');

const host = process.env.DATABASE_HOST;
const database = process.env.DATABASE;

mongoose.connect('mongodb://' + host + '/' + database, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;
