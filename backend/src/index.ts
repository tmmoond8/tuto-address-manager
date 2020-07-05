import express from 'express';
import routes from './routes';
import cors from 'cors';

const PORT = 30001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 대기 중`);
});
