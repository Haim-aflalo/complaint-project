import express from 'express';
import { complaintsRouter } from './routes/complaints.router.js';
import { adminRouter } from './routes/admin.router.js';
import { connectMongo } from './db/connect.js';

const app = express();
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
