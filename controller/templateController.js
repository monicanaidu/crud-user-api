const { StatusCodes } = require("http-status-codes");
const path = require("path");

const homeController = async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "../view/index.html"));
  } catch {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

const createController = async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "../view/create.html"));
  } catch {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

const editController = async (req, res) => {
  try {
    res.sendFile(path.resolve(__dirname, "../view/update.html"));
  } catch {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = { homeController, createController, editController };
