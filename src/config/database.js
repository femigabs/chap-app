import mongoose from 'mongoose';
import { config } from '../config';

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }); //
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("connected successfully");
});