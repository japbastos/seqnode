import * as express from 'express';
import routes from './routes';

import db from './db/models/index';

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333, () => {
  console.log('Server staterd on port 3333!');
  db.sequelize.authenticate()
    .then(() => {
      console.log('Database connected!');
    })
    .catch((err: any) => {
      console.log('Database connection error!', err);
    })
});