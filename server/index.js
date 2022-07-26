require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();