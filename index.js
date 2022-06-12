require('colors');

const { TYPES } = require('./helper');

const { success, warn, error } = TYPES;

const logSuccess = (message) => {
  const msg = message[success];
  console.log(msg);
};

const logWarn = (message) => {
  const msg = message[warn];
  console.log(msg);
};

const logError = (message) => {
  const msg = message[error];
  console.log(msg);
};

const log = () => {
  return {
    sucess: (msg) => logSuccess(msg),
    warn: (msg) => logWarn(msg),
    error: (msg) => logError(msg),
  };
};

const logger = log();

logger.sucess('Yes !!');
logger.warn('It Okay !!');
logger.error('No !!');

module.exports = log;
