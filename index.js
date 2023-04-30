import express from 'express';
import winston from 'winston';
import MarcaRouter from './routes/marca.route.js';

const app = express();
app.use(express.json());

app.use('/marcas', MarcaRouter);

const { printf, combine, label, timestamp } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'log/dealership-api.log' }),
  ],
  format: combine(
    label({ label: 'dealership-api' }),
    timestamp({ format: 'DD/MM/YYYY HH:mm' }),
    myFormat
  ),
});

app.listen(3000, () => {
  logger.info(`API Started!`);
});
