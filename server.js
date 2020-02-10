const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const app = express();

app.use(express.json());//permitir que seja enviado dados para aplicação no formato de JSON
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');//Registra o model na aplicação

app.use('/api', require('./src/routes'))

app.listen(3001);

