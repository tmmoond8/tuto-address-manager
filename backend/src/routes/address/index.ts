import express from 'express';
import constroller from './address.ctrl';
const user = express.Router();

user.get('/list', constroller.getList);
user.post('/add', constroller.addAddress);
user.delete('/remove', constroller.removeAddress);
user.patch('/default', constroller.setDefaultAddress);

export default user;
