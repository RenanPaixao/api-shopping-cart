import express from 'express'
import connection from './db/db';

const app = express();

app.get('/', ((req, res) => {

  connection.query('SELECT * FROM store', (e,r)=>{
    res.status(200).send(r);
  })
}))

export default app;