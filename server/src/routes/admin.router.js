import express from 'express';
import { checkAdmin } from '../controllers/admin.controllers.js';

export const adminRouter = express.Router();

adminRouter.post('/admin/login', (req, res) => {
  checkAdmin(req, res);
});
