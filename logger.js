const {
  createLogger, format, transports, config,
} = require('winston');

// const logger = createLogger({
//   transports: [
//     new transports.Console(),
//   ],
// });

const entryLogger = createLogger({
  levels: config.syslog.levels,
  transports: [
    new transports.Console({ level: error }),
    new transports.File({ filename: 'combined.log', level: 'info' }),
  ],
});

module.exports = entryLogger;
