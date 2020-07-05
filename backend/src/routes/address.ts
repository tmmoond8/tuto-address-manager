import express from 'express';
const user = express.Router();

user.get(
  '/list',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    return res.json({
      message: 'list',
    });
  },
);
user.post(
  '/add',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    return res.json({
      message: 'add',
    });
  },
);
user.delete(
  '/remove',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    return res.json({
      message: 'remove',
    });
  },
);

export default user;
