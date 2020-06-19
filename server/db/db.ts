import mongoose from 'mongoose';
import initDB from './init';
import config from '../config/config';

const db = {
  init: async (dbUri: string) => {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: config.DEFAULT_TIMEOUT,
    };

    mongoose
      .connect(dbUri, mongooseOptions)
      .then(() => {
        initDB();
        return console.log('Successfully established connection to MongoDB');
      })
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });

    return mongoose.connection;
  },
};

export default db;
