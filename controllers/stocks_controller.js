const express = require('express');
const router = express.Router();
const stocks = require('../data/stock_array');

// Display page of stocks based on page number
router.get('/page/:pageNum', (req,res,next) => {
    let pageLength = 50 
    let pageNum = req.params.pageNum;
    let maxPages = Math.floor(stocks.length/pageLength);

    if(pageNum <= maxPages){
        let startIndex = pageLength*(pageNum);
        let output = stocks.slice(startIndex, startIndex+pageLength);

        res.json(output);
    } else {
        next({status: 404, message: `Page number invalid - last page is ${maxPages}`});
    }
})

// Display all stocks in database
router.get('/', (req,res,next) => {
    res.json(stocks)
})

// Display data for a specified ticker symbol 
router.get('/:symbol', (req,res,next) => {
    let ticker = req.params.symbol.toUpperCase();
    let tickerIndex = stocks.findIndex(stocks => stocks.ticker === ticker)

    if (tickerIndex > -1) {
        res.json(stocks[tickerIndex]);
    } else {
        next({status: 404, message: `The ticker, ${ticker}, is not in our current database`});
    }
})

// Display the current price of the specified ticker symbol 
router.get('/price/:symbol', (req,res,next) => {
    let ticker = req.params.symbol.toUpperCase();
    let tickerIndex = stocks.findIndex(stocks => stocks.ticker === ticker)

    if (tickerIndex > -1) {
        res.json({'currPrice' : stocks[tickerIndex].currPrice});
    } else {
        next({status: 404, message: `The ticker, ${ticker}, is not in our current database`});
    }
})

// Error handling middleware
router.use( (err,req,res,next) => {
    let errorStatus = err.status || 404;
    let errorMsg = err.message || 'Unknown error, we are currently looking for a solution!';

    res.status(errorMsg).json({error: errorMsg})
})

module.exports = router;