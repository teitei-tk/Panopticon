require('dotenv').config();

import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();

app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`);
});

export const funcApp = functions.https.onRequest(app);
