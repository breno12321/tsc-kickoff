import express, { response } from 'express';
import { add } from './app';

express()
  .get('/', (req, res) => res.sendStatus(418))
  .get('/add/:a/:b', (req, res) => res.json({
    response: add(parseInt(req.params.a, 10), parseInt(req.params.b, 10)),
  }))
  .listen(9090, () => console.log('running'));
