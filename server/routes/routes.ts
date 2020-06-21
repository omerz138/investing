import * as express from 'express';
import { InstrumentsService } from '../services/instruments.service';
import { instrumentsController } from '../controllers/instrument.controller';

export const register = (app: express.Application) => {
  app.get('/api/instrument', instrumentsController.getAll);
  app.post('/api/instrument', instrumentsController.add);
  app.delete('/api/instrument', instrumentsController.remove);
};
