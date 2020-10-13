const frontendCheck = (req, res, next) => {
  if (req.headers['frontend']) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = frontendCheck;
