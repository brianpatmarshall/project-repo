const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(`Attempting to connect to MongoDB on ${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
    // console.log(conn);

    return conn;
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }

  const listDatabases = async () => {
    const connection = mongoose.createConnection(process.env.MONGO_URI);
    const Admin = mongoose.mongo.Admin;

    connection.on('open', function() {
      const admin = new Admin(connection.db);
      console.log(`admin = ${admin}`);
      admin.listDatabases(function(err, result) {
        console.log('listDatabases succeeded');
        console.log(`Databases: ${result}`);
      });
    })
  }
};

module.exports = connectDB;
