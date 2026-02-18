import express from 'express';
import {
  createComplaint,
  getComplaint,
} from '../controllers/complaints.controllers.js';
import { checkToken } from '../middleware/auth.mid.js';

export const complaintsRouter = express.Router();

complaintsRouter.post('/complaints', (req, res) => {
  createComplaint(req, res);
});

complaintsRouter.get('/complaints', checkToken, (req, res) => {
  getComplaint(req, res);
});
