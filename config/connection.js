const {connect, connection} = require('mongoose');

const connectString = 'mongoose://127.0.0.1:27017/studentsDB';

connect(connectString);

module.exports = connection;