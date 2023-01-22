const stocks = [
    {
        ticker: 'AAPL',
        companyName: 'Apple Inc.',
        currPrice: 345.34,
        volume: 23423874
    },
    {
        ticker: 'MSFT',
        companyName: 'Microsoft Corp.',
        currPrice: 234.34,
        volume: 398475839
    },
    {
        ticker: 'AMZN',
        companyName: 'Amazon.com Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'META',
        companyName: 'Meta Platforms, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'TSLA',
        companyName: 'Tesla Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'GOOGL',
        companyName: 'Alphabet Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'MMM',
        companyName: '3M Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'NVDA',
        companyName: 'NVIDIA Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'XOM',
        companyName: 'Exxon Mobil Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'JNJ',
        companyName: 'Johnson & Johnson',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'BRKB',
        companyName: 'Berkshire Hathaway Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'UNH',
        companyName: 'UnitedHealth Group Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    
    {
        ticker: 'JPM',
        companyName: 'JP Morgan Chase & Co.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'V',
        companyName: 'Visa Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'PG',
        companyName: 'Procter & Gamble Company',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'XOM',
        companyName: 'Exxon Mobil Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'CVX',
        companyName: 'Chevron Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'HD',
        companyName: 'Home Depot, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'MA',
        companyName: 'Mastercard Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'MKR',
        companyName: 'Merck & Company, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'LLY',
        companyName: 'Eli Lilly and Co.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'ABBV',
        companyName: 'AbbVie Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'PFE',
        companyName: 'Pfizer, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'PEP',
        companyName: 'PepsiCo, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'KO',
        companyName: 'Coca-Cola Co.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'BAC',
        companyName: 'Bank of America Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'AVGO',
        companyName: 'Broadcom Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'COST',
        companyName: 'Costco Wholesale Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'ABT',
        companyName: 'Abbott Laboratories',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'MCD',
        companyName: `McDonald's Corp.`,
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'CSCO',
        companyName: 'Cisco Systems, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'DIS',
        companyName: 'Walt Disney Co.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'DHR',
        companyName: 'Danaher Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'ACN',
        companyName: 'Accenture plc',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'VZ',
        companyName: 'Verizon Communications Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'CMSA',
        companyName: 'Comcast Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },

    {
        ticker: 'NEE',
        companyName: 'NextEra Energy, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'WFC',
        companyName: 'Wells Fargo & Co.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'LIN',
        companyName: 'Linde plc',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'ADBE',
        companyName: 'Adobe Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'PM',
        companyName: 'Philip Morris International Inc',
        currPrice: 478.78,
        volume: 9849859348
    },

    {
        ticker: 'NKE',
        companyName: 'Nike, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'BMY',
        companyName: 'Bristol-Myers Squibb Co.',
        currPrice: 478.78,
        volume: 9849859348
    },

    {
        ticker: 'TXN',
        companyName: 'Texas Instruments In.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'COP',
        companyName: 'ConocoPhillips',
        currPrice: 478.78,
        volume: 9849859348
    },

    {
        ticker: 'CRM',
        companyName: 'Salesforce, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'NFLX',
        companyName: 'Netflix, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'AMGN',
        companyName: 'Amgen Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'RTX',
        companyName: 'Raytheon Technologies Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'T',
        companyName: 'AT&T Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'HON',
        companyName: 'Honeywell International Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'ORCL',
        companyName: 'Oracle Corp',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'QCOM',
        companyName: 'QUALCOMM In.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'UPS',
        companyName: 'United Parcel Service, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'CAT',
        companyName: 'Caterpillar, Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'IBM',
        companyName: 'International Business Machines Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'UNP',
        companyName: 'Union Pacific Corp',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'LOW',
        companyName: `Lowes's Company Inc.`,
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'MS',
        companyName: 'Morgan Stanley',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'SPGI',
        companyName: 'S&P Gobal Inc.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'SBUX',
        companyName: 'Starbucks Corp.',
        currPrice: 478.78,
        volume: 9849859348
    },
    {
        ticker: 'GS',
        companyName: 'Goldman Sachs Group Inc.',
        currPrice: 478.78,
        volume: 9849859348
    }
];

module.exports = stocks;