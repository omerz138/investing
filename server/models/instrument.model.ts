import mongoose from 'mongoose';

const InstrumentSchema = new mongoose.Schema({
  instrumentId: Number,
  name: String,
  symbol: String,
  instrumentType: String,
});

export default InstrumentSchema;
