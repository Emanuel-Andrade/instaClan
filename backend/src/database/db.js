const mongoose = require('mongoose');

const user = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const connectionUrl = `mongodb+srv://${user}:${password}@cluster0.a5yik.mongodb.net/?retryWrites=true&w=majority`;

const conn = async () => {
  try {
    const connection = await mongoose.connect(connectionUrl,{
              useNewUrlParser: true,
      
    });

    console.log('connected to Mongo');
    return connection;
  } catch (error) {
    return console.log(error);
  }
};

conn();

module.exports = conn;
