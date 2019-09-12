import express from 'express';
import router from './Routes/entryRoutes';
//import db from './Models/db';

const app = express();


app.use('/', router);

const PORT = 3000;
app.listen( PORT, function(){
 console.log(`server is running on PORT ${PORT}`)
});

