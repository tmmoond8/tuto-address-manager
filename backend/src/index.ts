import express from 'express';
import routes from './routes';

const PORT = 30001;
const app = express();

app.use(express.json());
app.use(routes);

export default app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 대기 중`);
});
