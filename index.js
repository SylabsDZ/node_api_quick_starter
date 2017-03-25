import express from 'express';
import bodyParser from 'body-parser';
import router from './services/router';

const app = express();
app.use(bodyParser.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('listening...');
});
