const throwError = (error, status) => {
  const err = new Error(error);
  err.status = status;
  throw err;
};

module.exports = throwError;
