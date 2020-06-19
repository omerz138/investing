import * as express from 'express';
import { InstrumentsService } from '../services/instruments.service';
import { instrumentsController } from '../controllers/instrument.controller';

export const register = (app: express.Application) => {
  app.get('/api', instrumentsController.getAll);
  app.post('/api/add-instrument', instrumentsController.add);
  app.post('/api/remove-instrument', instrumentsController.remove);
};
