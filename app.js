import express from 'express';
import bodyParser from 'body-parser';
import schoolRoutes from './routes.js'; 

const app = express();

app.use(bodyParser.json());

app.use('/', schoolRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("server is running");
})
