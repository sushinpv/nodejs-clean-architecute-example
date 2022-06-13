const defaultController = (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
};

const pageNotFoundController = (req, res) => {
  res.status(404).json({
    message: "Route you are looking for is not exits",
  });
};

module.exports = { defaultController, pageNotFoundController };
