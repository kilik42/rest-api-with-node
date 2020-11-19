import express, { response } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/usuers.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/', (req, res)=> {
        console.log("test");

        res.send('hello from homepage');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));