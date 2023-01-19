const stocks = require('./stock_array');
const express = require('express');
const morgan = require('morgan');
const stockController = require('./controllers/stocks_controller');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(morgan('short'));

// About page
app.get('/about', (req,res) => {
    res.json({'message': 'This is a stocks API'})
})

// Stock page 
app.use('/stocks', stockController);

// Error Handling
app.use((req,res) => {
    res.status(404).json({status: 404, message: 'Route not found!'})
});

app.listen(port, () => {})