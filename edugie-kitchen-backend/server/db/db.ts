import { MongoMemoryServer } from 'mongodb-memory-server';

import mongoose from 'mongoose';


export const connectTestDB = () => {
  try {
    MongoMemoryServer.create().then((mongo) => {
      const uri = mongo.getUri();

      mongoose.connect(uri,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }).then(() => {
        console.log('connected to testDB');
      });
    });
  } catch (error) {
    console.log(error);
  }
};


