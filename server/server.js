const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const boom = require('express-boom');
const app = express();
const whitelist = ['http://localhost:4200'];
const corsOptions = {
    origin : (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || origin === undefined) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
   methods: 'GET, PUT, POST, PATCH, DELETE, HEAD',
   credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(boom());

app.use('/user', require('./user-list/user-list.controller'));
// require('./routes/app.routes')(app);
const server = app.listen(4000, () =>{
    console.log("server started", server.address());
});