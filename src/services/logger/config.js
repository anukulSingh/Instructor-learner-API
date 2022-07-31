const winston = require('winston')

const logConfiguration = {
    transports: [
        // new winston.transports.Console()
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `One24Trade`
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.colorize(),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),

    ),

};

winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
});


module.exports = logConfiguration;