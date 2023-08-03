const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use(cors());

app.use('/api/user', require('./routes/user'));
app.use('/api/notes', require('./routes/notes'));

const PORT = process.env.PORT || 3001

// Heroku deploy frontend
if (process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"));
}

app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`);
});