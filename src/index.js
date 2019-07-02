// Express library
import express from 'express';

// Third-party libraries
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', (req, res) => res.status(200).json({ message: 'Welcome to slackbot' }));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));


export default app;
