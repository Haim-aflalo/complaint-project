import express from 'express';
import cors from 'cors';
import { complaintsRouter } from './src/routes/complaints.router.js';
import { adminRouter } from './src/routes/admin.router.js';
import { connectMongo } from './src/db/connect.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', complaintsRouter);
app.use('/api', adminRouter);

connectMongo().then((connected) => {
  if (connected) {
    app.listen(3000, () => {
      console.log(`Server is running on port http://localhost:3000`);
    });
  }
});
