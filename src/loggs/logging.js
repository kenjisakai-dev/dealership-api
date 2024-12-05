import winston from 'winston';

const { printf, combine, label, timestamp } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.File({ filename: 'logs/dealership-api.log' }),
    ],
    format: combine(
        label({ label: 'dealership-api' }),
        timestamp({ format: 'DD/MM/YYYY HH:mm' }),
        myFormat,
    ),
});

export default logger;
