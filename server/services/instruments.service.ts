import InstrumentApi from '../models/instrument.interface';
import mongoose from 'mongoose';

const add = (instrumentItem: InstrumentApi) => {
  const Instrument = mongoose.model('instrument');
  const newInstrument = new Instrument(instrumentItem);
  return newInstrument.save();
};

const remove = (instrumentId: number) => {
  const Instrument = mongoose.model('instrument');
  return Instrument.findOneAndDelete({ instrumentId });
};

const getAll = () => {
  const Instrument = mongoose.model('instrument');
  return Instrument.find();
};

export const InstrumentsService = {
  getAll,
  remove,
  add,
};
