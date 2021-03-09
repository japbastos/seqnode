import { Router } from 'express';

const routes = Router();

routes.post('/users', (req, res) => {
  console.log('Foi');
  res.json({ message: 'Deu ruim!' });
});

export default routes;
