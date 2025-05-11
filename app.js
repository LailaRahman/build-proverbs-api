import express from 'express';
import cors from 'cors';
import proverbsRoutes from './routes/proverbsRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Afghan Proverbs API is running...');
});

app.use('/proverbs', proverbsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
