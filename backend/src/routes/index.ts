import express from 'express';
import address from './address';

const routes = express.Router();

routes.use('/address', address);

export default routes;
