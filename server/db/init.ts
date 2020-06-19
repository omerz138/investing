import instruments from './instruments._init';
import mongoose from 'mongoose';
import InstrumentSchema from '../models/instrument.model';

const initDB = async () => {
  const Instrument = mongoose.model('instrument', InstrumentSchema);
  // reset collection
  try {
    await Instrument.deleteMany({});
  } catch (err) {
    console.log('InitDB failed');
  }

  // init default data
  Instrument.insertMany(instruments)
    .then(() => {
      console.log('InitDB finished Successfully');
    })
    .catch(() => {
      console.log('InitDB failed');
    });
};

export default initDB;
