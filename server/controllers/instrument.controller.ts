import { InstrumentsService } from '../services/instruments.service';
import { raw } from 'body-parser';

const getAll = async (req: any, res: any) => {
  try {
    const allInstruments = await InstrumentsService.getAll();
    res.status(200);
    res.json(allInstruments);
  } catch (err) {
    res.status(404);
    res.send('Error while trying to fetch instruents');
  }
};

const remove = (req: any, res: any) => {
  const instrumentId = req.query.instrumentId;
  InstrumentsService.remove(instrumentId)
    .then(() => {
      res.status(200);
      res.send(req.body);
    })
    .catch((err) => {
      console.error(`Error: ` + err);
      res
        .status(404)
        .send(`Error while trying to remove instrument ${instrumentId}`);
    });
};

const add = (req: any, res: any) => {
  const instrument = req.body;
  InstrumentsService.add(instrument)
    .then(() => {
      instrument.instrumentId = Number(instrument.instrumentId);
      res.status(201);
      res.send(instrument);
    })
    .catch((err) => {
      console.error(`Error: ` + err);
      res
        .status(404)
        .send(`Error while trying to save instrument ${instrument.id}`);
    });
};

export const instrumentsController = {
  getAll,
  add,
  remove,
};
