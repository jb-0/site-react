const frontendCheck = (req, res, next) => {
  if (req.headers['react-frontend']) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = frontendCheck;
